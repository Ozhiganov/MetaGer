<?php

namespace App\Models;

/* Die Klasse Result sammelt alle Informationen über ein einzelnes Suchergebnis.
 *  Die Results werden von den Suchmaschinenspezifischen Parser-Skripten erstellt.
 */
class Result
{
    public $provider; # Die Engine von der das Suchergebnis kommt
    public $titel; # Der Groß Angezeigte Name für das Suchergebnis
    public $link; # Der Link auf die Ergebnisseite
    public $anzeigeLink; # Der tatsächlich angezeigte Link (rein optisch)
    public $descr; # Die eventuell gekürzte Beschreibung des Suchergebnisses
    public $longDescr; # Die ungekürzte Beschreibung des Suchergebnisses
    public $gefVon; # Die Suchmaschine von der dieses Ergebnis stammt
    public $gefVonLink;
    public $sourceRank; # Das Ranking für dieses Suchergebnis von der Seite, die es geliefert hat (implizit durch Ergebnisreihenfolge: 20 - Position in Ergebnisliste)
    public $partnershop; # Ist das Ergebnis von einem Partnershop? (bool)
    public $image; # Ein Vorschaubild für das Suchergebnis (als URL)

    public $proxyLink; # Der Link für die Seite über unseren Proxy-Service
    public $engineBoost = 1; # Der Boost für den Provider des Suchergebnisses
    public $valid = true; # Ob das Ergebnis noch gültig ist (bool)
    public $host; # Der aus dem Link gelesene Host des Suchergebnisses
    public $strippedHost; # Der Host in Form "foo.bar.de"
    public $strippedDomain; # Die Domain in Form "bar.de"
    public $strippedLink; # Der Link in Form "foo.bar.de/test"
    public $strippedHostAnzeige; # Der Host in Form "foo.bar.de"
    public $strippedDomainAnzeige; # Die Domain in Form "bar.de"
    public $strippedLinkAnzeige; # Der Link in Form "foo.bar.de/test"
    public $rank; # Das Ranking für das Ergebnis
    public $new = true;

    # Erstellt ein neues Ergebnis
    public function __construct($provider, $titel, $link, $anzeigeLink, $descr, $gefVon, $gefVonLink, $sourceRank, $additionalInformation = [])
    {
        $this->provider = $provider;
        $this->titel = strip_tags(trim($titel));
        $this->link = trim($link);
        $this->anzeigeLink = trim($anzeigeLink);
        $this->anzeigeLink = preg_replace("/(http[s]{0,1}:\/\/){0,1}(www\.){0,1}/si", "", $this->anzeigeLink);
        $this->descr = strip_tags(trim($descr), '<p>');
        $this->descr = preg_replace("/\n+/si", " ", $this->descr);
        $this->longDescr = $this->descr;
        if (strlen($this->descr) > 150) {
            $this->descr = wordwrap($this->descr, 150);
            $this->descr = substr($this->descr, 0, strpos($this->descr, "\n"));
            $this->descr .= "&#8230;"; // Ellipsis character
        }
        $this->gefVon = trim($gefVon);
        $this->gefVonLink = trim($gefVonLink);
        $this->proxyLink = $this->generateProxyLink($this->link);
        $this->sourceRank = $sourceRank;
        if ($this->sourceRank <= 0 || $this->sourceRank > 20) {
            $this->sourceRank = 20;
        }
        $this->sourceRank = 20 - $this->sourceRank;
        if (isset($provider->{"engine-boost"})) {
            $this->engineBoost = floatval($provider->{"engine-boost"});
        } else {
            $this->engineBoost = 1;
        }
        $this->valid = true;
        $this->host = @parse_url($link, PHP_URL_HOST);
        $this->strippedHost = $this->getStrippedHost($this->link);
        $this->strippedDomain = $this->getStrippedDomain($this->link);
        $this->strippedLink = $this->getStrippedLink($this->link);
        $this->strippedHostAnzeige = $this->getStrippedHost($this->anzeigeLink);
        $this->strippedDomainAnzeige = $this->getStrippedDomain($this->anzeigeLink);
        $this->strippedLinkAnzeige = $this->getStrippedLink($this->anzeigeLink);
        $this->rank = 0;
        $this->partnershop = isset($additionalInformation["partnershop"]) ? $additionalInformation["partnershop"] : false;
        $this->image = isset($additionalInformation["image"]) ? $additionalInformation["image"] : "";
        $this->price = isset($additionalInformation["price"]) ? $additionalInformation["price"] : 0;
        $this->price_text = $this->price_to_text($this->price);
        $this->additionalInformation = $additionalInformation;
        $this->hash = spl_object_hash($this);
    }

    private function price_to_text($price)
    {
        $euros = floor($price / 100);
        $cents = $price % 100;
        $price_text = $euros . ',';
        if ($cents < 10) {
            $price_text .= '0';
        }
        $price_text .= $cents . ' €';
        return $price_text;
    }

    /* Ranked das Ergebnis nach folgenden Aspekten:
     *  Startwert 0
     *  + 0.02 * Sourcerank (20 - Position in Ergebnisliste des Suchanbieters)
     *  * Engine-Boost
     */
    public function rank($eingabe)
    {
        $rank = 0;

        # Boost für Source Ranking
        $rank += ($this->sourceRank * 0.02);

        # Boost für passende ??? URL
        $rank += $this->calcURLBoost($eingabe);

        # Boost für Vorkommen der Suchwörter:
        $rank += $this->calcSuchwortBoost($eingabe);

        # Boost für Suchmaschine
        if ($this->engineBoost > 0) {
            $rank *= floatval($this->engineBoost);
        }

        # Runter Ranken von Yandex Ergebnissen mit zu viel kyrillischen Texten
        if (stripos($this->gefVon, "yandex") !== false) {
            $rank -= $this->calcYandexBoost($eingabe);
        }

        $this->rank = $rank;
    }

    # Berechnet, ob dieses Suchergebnis einen Malus erhalten soll, oder nicht
    # Übergeben werden alle Yandex Ergebnisse
    # Wenn die Suchworte kein kyrillisches Zeichen enthalten, wird das Ergebnis schlechter bewertet,
    # falls es selbst zu viele kyrillische Zeichen enthält
    private function calcYandexBoost($tmpEingabe)
    {
        $maxRatio = 0.1; # Gibt den Prozentsatz von Kyrillischen Zeichen in Titel und Beschreibung an, ab dem das Ergebnis runter gerankt werden soll
        if (preg_match('/[А-Яа-яЁё]/u', $tmpEingabe) === 1) {
            # Das Suchwort enthält kyrillische Zeichen, also dürfen es auch die Ergebnisse
            return 0;
        } else {
            # Wir überprüfen das Verhältnis von Kyrillischen Zeichen im Titel
            if (preg_match_all('/[А-Яа-яЁё]/u', $this->titel, $matches)) {
                $count = sizeof($matches[0]);
                $titleSize = strlen($this->titel);
                $percKyr = $count / $titleSize;
                if ($percKyr > $maxRatio) {
                    return 5;
                }
            }
            # Wir überprüfen das Verhältnis von Kyrillischen Zeichen in der Beschreibung
            if (preg_match_all('/[А-Яа-яЁё]/u', $this->descr, $matches)) {
                $count = sizeof($matches[0]);
                $descrSize = strlen($this->descr);
                $percKyr = $count / $descrSize;
                if ($percKyr > $maxRatio) {
                    return 5;
                }
            }
        }
        return 0;
    }

    # Berechnet den Ranking-Boost durch ??? URL
    public function calcURLBoost($tmpEingabe)
    {
        $link = $this->anzeigeLink;
        if (strpos($link, "http") !== 0) {
            $link = "http://" . $link;
        }
        $link = @parse_url($link, PHP_URL_HOST) . @parse_url($link, PHP_URL_PATH);
        $tmpLi = $link;
        $count = 0;
        $tmpLink = "";
        # Löscht verschiedene unerwünschte Teile aus $link und $tmpEingabe
        $regex = [
            "/\s+/si", # Leerzeichen
            "/http:/si", # "http:"
            "/https:/si", # "https:"
            "/www\./si", # "www."
            "/\//si", # "/"
            "/\./si", # "."
            "/-/si", # "-"
        ];
        foreach ($regex as $reg) {
            $link = preg_replace($regex, "", $link);
            $tmpEingabe = preg_replace($regex, "", $tmpEingabe);
        }
        foreach (str_split($tmpEingabe) as $char) {
            if (!$char
                || !$tmpEingabe
                || strlen($tmpEingabe) === 0
                || strlen($char) === 0
            ) {
                continue;
            }
            if (strpos(strtolower($tmpLink), strtolower($char)) >= 0) {
                $count++;
                $tmpLink = str_replace(urlencode($char), "", $tmpLink);
            }
        }
        if (strlen($this->descr) > 40 && strlen($link) > 0) {
            return $count / ((strlen($link)) * 60); # ???
        } else {
            return 0;
        }
    }

    # Berechnet den Ranking-Boost durch das Vorkommen von Suchwörtern
    private function calcSuchwortBoost($tmpEingabe)
    {
        $maxRank = 0.1;
        $tmpTitle = $this->titel;
        $tmpDescription = $this->descr;
        $isWithin = false;
        $tmpRank = 0;
        $tmpEingabe = preg_replace("/\b\w{1,3}\b/si", "", $tmpEingabe);
        $tmpEingabe = preg_replace("/\s+/si", " ", $tmpEingabe);

        foreach (explode(" ", trim($tmpEingabe)) as $el) {
            if (strlen($tmpTitle) === 0 || strlen($el) === 0 || strlen($tmpDescription) === 0) {
                continue;
            }

            $el = preg_quote($el, "/");
            if (strlen($tmpTitle) > 0) {
                if (preg_match("/\b$el\b/si", $tmpTitle)) {
                    $tmpRank += .7 * .6 * $maxRank;
                } elseif (strpos($tmpTitle, $el) !== false) {
                    $tmpRank += .3 * .6 * $maxRank;
                }
            }
            if (strlen($tmpDescription) > 0) {
                if (preg_match("/\b$el\b/si", $tmpDescription)) {
                    $tmpRank += .7 * .4 * $maxRank;
                } elseif (strpos($tmpDescription, $el) !== false) {
                    $tmpRank += .3 * .4 * $maxRank;
                }
            }
        }

        $tmpRank /= sizeof(explode(" ", trim($tmpEingabe))) * 10;
        return $tmpRank;
    }

    # Überprüft ob das Ergebnis aus irgendwelchen Gründen unerwünscht ist.
    public function isValid(\App\MetaGer $metager)
    {
        # Perönliche Host und Domain Blacklist
        if (in_array(strtolower($this->strippedHost), $metager->getUserHostBlacklist())
            || in_array(strtolower($this->strippedDomain), $metager->getUserDomainBlacklist())) {
            return false;
        }

        # Persönliche URL Blacklist
        foreach ($metager->getUserUrlBlacklist() as $word) {
            if (strpos(strtolower($this->link), $word)) {
                return false;
            }

        }

        # Allgemeine URL und Domain Blacklist
        if ($this->isBlackListed($metager)) {
            return false;
        }

        # Stopworte
        foreach ($metager->getStopWords() as $stopWord) {
            $text = $this->titel . " " . $this->descr;
            if (stripos($text, $stopWord) !== false) {
                return false;
            }
        }

        /*
        # Phrasensuche:
        $text = strtolower($this->titel) . " " . strtolower($this->descr);
        foreach ($metager->getPhrases() as $phrase) {
        if (strpos($text, $phrase) === false) {
        return false;
        }
        }
         */

        /* Der Dublettenfilter, der sicher stellt,
         *  dass wir nach Möglichkeit keinen Link doppelt in der Ergebnisliste haben.
         */
        $dublettenLink = $this->strippedLink;
        if (!empty($this->provider->{"dubletten-include-parameter"}) && sizeof($this->provider->{"dubletten-include-parameter"}) > 0) {
            $dublettenLink .= "?";
            $query = parse_url($this->link);
            if (!empty($query["query"])) {
                $queryTmp = explode("&", $query["query"]);
                $query = [];
                foreach ($queryTmp as $getParameter) {
                    $keyVal = explode("=", $getParameter);
                    $query[$keyVal[0]] = $keyVal[1];
                }
                foreach ($this->provider->{"dubletten-include-parameter"} as $param) {
                    if (!empty($query[$param])) {
                        $dublettenLink .= $param . "=" . $query[$param] . "&";
                    }
                }
                $dublettenLink = rtrim($dublettenLink, "&");
            }
        }

        if ($metager->addLink($dublettenLink)) {
            $metager->addHostCount($this->strippedHost);
            return true;
        } else {
            return false;
        }
    }

    public function isBlackListed(\App\MetaGer $metager)
    {
        if (($this->strippedHost !== "" && (in_array($this->strippedHost, $metager->getDomainBlacklist()) ||
            in_array($this->strippedLink, $metager->getUrlBlacklist()))) ||
            ($this->strippedHostAnzeige !== "" && (in_array($this->strippedHostAnzeige, $metager->getDomainBlacklist()) ||
                in_array($this->strippedLinkAnzeige, $metager->getUrlBlacklist())))) {
            return true;
        } else {
            return false;
        }

    }

    /* Liest aus einem Link den Host.
     *  Dieser wird dabei in die Form:
     *  "http://www.foo.bar.de/test?ja=1" -> "foo.bar.de"
     *  gebracht.
     */
    public function getStrippedHost($link)
    {
        $match = $this->getUrlElements($link);
        return $match['host'];
    }

    /* Entfernt "http://", "www" und Parameter von einem Link
     *  Dieser wird dabei in die Form:
     *  "http://www.foo.bar.de/test?ja=1" -> "foo.bar.de/test"
     *  gebracht.
     */
    public function getStrippedLink($link)
    {
        $match = $this->getUrlElements($link);
        return $match['host'] . $match['path'];
    }

    /* Liest aus einem Link die Domain.
     *  Dieser wird dabei in die Form:
     *  "http://www.foo.bar.de/test?ja=1" -> "bar.de"
     *  gebracht.
     */
    public function getStrippedDomain($link)
    {
        $match = $this->getUrlElements($link);
        return $match['domain'];
    }

    # Erstellt aus einem Link einen Proxy-Link für unseren Proxy-Service
    public function generateProxyLink($link)
    {
        if (!$link) {
            return "";
        }

        # Link to our new Proxy software:
        $pw = md5(env('PROXY_PASSWORD') . $link);

        $proxyUrl = base64_encode(str_rot13($link));
        $proxyUrl = urlencode(str_replace("/", "<<SLASH>>", $proxyUrl));

        return "https://proxy.metager.de/" . $pw . "/" . $proxyUrl;
    }

    /* Liest aus einer URL alle Informationen aus
     * https://max:muster@www.example.site.page.com:8080/index/indexer/list.html?p1=A&p2=B#ressource
     * (?:((?:http)|(?:https))(?::\/\/))?
     * https://                  => [1] = http / https
     * (?:([a-z0-9.\-_~]+):([a-z0-9.\-_~]+)@)?
     * username:password@        => [2] = username, [3] = password
     * (?:(www)(?:\.))?
     * www.                      => [4] = www
     * ((?:(?:[a-z0-9.\-_~]+\.)+)?([a-z0-9.\-_~]+\.[a-z0-9.\-_~]+))
     * example.site.page.com     => [5] = example.site.page.com, [6] = page.com
     * (?:(?::)(\d+))?
     * :8080                     => [7] = 8080
     * ((?:(?:\/[a-z0-9.\-_~]+)+)(?:\.[a-z0-9.\-_~]+)?)?
     * /index/indexer/list.html  => [8] = /index/indexer/list.html
     * (\?[a-z0-9.\-_~]+=[a-z0-9.\-_~]+(?:&[a-z0-9.\-_~]+=[a-z0-9.\-_~]+)*)?
     * ?p1=A&p2=B                => [9] = ?p1=A&p2=B
     * (?:(?:#)([a-z0-9.\-_~]+))?
     * #ressource                => [10] = ressource
     */
    public function getUrlElements($url)
    {
        if (!starts_with($url, "http")) {
            $url = "http://" . $url;
        }

        $parts = parse_url($url);
        $re = [];

        $re["schema"] = empty($parts["scheme"]) ? "" : $parts["scheme"];
        $re["username"] = empty($parts["user"]) ? "" : $parts["user"];
        $re["password"] = empty($parts["pass"]) ? "" : $parts["pass"];
        $re["web"] = "";
        $re["host"] = $parts["host"];
        if (stripos($re["host"], "www.") === 0) {
            $re["web"] = "www.";
            $re["host"] = substr($re["host"], strpos($re["host"], ".") + 1);
        }
        $hostParts = explode(".", $re["host"]);
        if (sizeof($hostParts) >= 3) {
            $re["domain"] = $hostParts[sizeof($hostParts) - 2] . "." . $hostParts[sizeof($hostParts) - 1];
        } else {
            $re["domain"] = $re["host"];
        }
        $re["port"] = empty($parts["port"]) ? ($re["schema"] === "http" ? 80 : ($re["schema"] === "https" ? 443 : 80)) : $parts["port"];
        $re["path"] = empty($parts["path"]) ? "" : $parts["path"];
        $re["query"] = empty($parts["query"]) ? "" : $parts["query"];
        $re["fragment"] = empty($parts["fragment"]) ? "" : $parts["fragment"];

        return $re;
    }

    # Getter

    public function getRank()
    {
        return $this->rank;
    }

    public function getDate()
    {
        if (isset($this->additionalInformation["date"])) {
            return $this->additionalInformation["date"];
        } else {
            return null;
        }
    }

    public function getLangString()
    {
        $string = "";

        $string .= $this->titel;
        $string .= $this->descr;

        return $string;
    }
}
