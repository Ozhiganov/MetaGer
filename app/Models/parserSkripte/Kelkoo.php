<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Kelkoo extends Searchengine
{
    public $results = [];

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
        $this->getString = $this->UrlSigner();
        $this->hash = md5($this->engine->host . $this->getString . $this->engine->port . $this->name);
    }

       
    public function loadResults($result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }

            $results = $content->xpath('//response/result[@name="response"]/doc');

            foreach ($results as $result) {
                die($reuslt);
                $result      = simplexml_load_string($result->saveXML());
                $title       = $result->xpath('/doc/arr[@name="artikelName"]')[0]->{"str"}->__toString();
                $link        = $result->xpath('/doc/arr[@name="artikelDeeplink"]')[0]->{"str"}->__toString();
                $anzeigeLink = parse_url($link);
                parse_str($anzeigeLink['query'], $query);
                $anzeigeLink = $query['url'];
                $descr       = $result->xpath('/doc/arr[@name="artikelBeschreibung"]')[0]->{"str"}->__toString();
                $image       = $result->xpath('/doc/arr[@name="artikelImageurl"]')[0]->{"str"}->__toString();
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"},$this->engine->homepage,
                    $this->counter,
                    ['image' => $image]
                );
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }


    # kelkoogroup.com/kelkoo-customer-service/kelkoo-developer-network/shopping-services/samples/signing-url-php/
    private function UrlSigner(){
        
        $urlPath = $this->getString;
        $partner = $this->engine->{"http-auth-credentials"}->ID;
        $key = $this->engine->{"http-auth-credentials"}->Key;

        $URL_sig = "hash";
        $URL_ts = "timestamp";
        $URL_partner = "aid"; 
        $URLreturn = "";
        $URLtmp = "";
        $s = "";
        // get the timestamp
        $time = time();
        // replace " " by "+"
        $urlPath = str_replace(" ", "+", $urlPath);
        // format URL
        $URLtmp = $urlPath . "&" . $URL_partner . "=" . $partner . "&amp" . $URL_ts . "=" . $time;
       
        // URL needed to create the token
        $s = $urlPath . "&" . $URL_partner . "=" . $partner . "&" . $URL_ts . "=" . $time . $key;
        $token = "";
        $token = base64_encode(pack('H*', md5($s)));
        $token = str_replace(array("+", "/", "="), array(".", "_", "-"), $token);
        $URLreturn = $URLtmp . "&" . $URL_sig . "=" . $token;
        return $URLreturn;

    }
}
