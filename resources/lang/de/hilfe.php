<?php

return [
    "achtung" => "Achtung, da unsere Suchmaschine ständig weiterentwickelt und verbessert wird, kann es dazu kommen, dass sich immer wieder Änderungen an Aufbau und Funktion ergeben. Wir versuchen zwar die Hilfe schnellstmöglich den Änderungen entsprechend anzupassen, können jedoch nicht ausschließen, dass es zu temporären Unstimmigkeiten in Teilen der Erklärungen kommt.",
    "title" => "MetaGer - Hilfe",

    "searchfield.title" => 'Das Suchfeld',
    "searchfield.info" => 'Das Suchfeld besteht aus mehreren Teilen:',
    "searchfield.memberkey" => 'Dem Schlüsselsymbol (nur für Vereinsmitglieder): Hier können die Mitglieder des SUMA-EV Ihren Schlüssel eingeben, um die werbefreie Suche nutzen zu können. Sie wollen das auch? Werden Sie Mitglied: <a href = "/beitritt/">Beitrittsantrag</a>',
    "searchfield.slot" => 'Dem Suchfeld: Geben Sie hier Ihren Suchbegriff ein.',
    "searchfield.search" => 'Der Lupe: Starten Sie die Suche.',
    "result.top" => 'Auf der Ergebnisseite: Klicken / drücken Sie auf das Filterzeichen, um alle Filterfunktionen benutzen zu können.',

    "stopworte.title" => "Stoppworte",
    "stopworte.1" => "Wenn Sie unter den MetaGer-Suchergebnissen solche ausschließen wollen, in denen bestimmte Worte (Ausschlussworte / Stopworte) vorkommen, dann erreichen Sie das, indem Sie diese Worte mit einem Minus versehen.",
    "stopworte.2" => "Beispiel: Sie suchen ein neues Auto, aber auf keinen Fall einen BMW. Ihre Eingabe lautet also:",
    "stopworte.3" => "auto neu -bmw",

    "mehrwortsuche.title" => "Mehrwortsuche",
    "mehrwortsuche.1" => "Wenn Sie bei MetaGer nach mehr als einem Wort suchen, versuchen wir automatisch Ihnen Ergebnisse zu liefern, in denen alle Wörter vorkommen, oder die diesen möglichst nahe kommen.",
    "mehrwortsuche.2" => "Sollte Ihnen das nicht ausreichen, haben Sie 2 Möglichkeiten ihre Suche genauer zu machen:",
    "mehrwortsuche.3" => "Wenn Sie sicher gehen wollen, dass Wörter aus Ihrer Suche auch in den Ergebnissen vorkommen, dann müssen Sie diese in Anführungszeichen setzen.",
    "mehrwortsuche.3.example" => '"der" "runde" "tisch"',
    "mehrwortsuche.4" => "Mit einer Phrasensuche können Sie statt nach einzelnen Wörtern auch nach Wortkombinationen suchen. Setzen Sie dazu einfach diejenigen Wörter, die gemeinsam vorkommen sollen, in Anführungszeichen.",
    "mehrwortsuche.4.example" => '"der runde tisch"',

    "grossklein.title" => "Groß-/ Kleinschreibung",
    "grossklein.1" => "Groß- und Kleinschreibung wird bei der Suche nicht unterschieden, es handelt sich um eine rein inhaltliche Suche.",
    "grossklein.2" => "Beispiel: Die Suche nach",
    "grossklein.2.example" => "suchmaschine",
    "grossklein.3" => "sollte die gleichen Ergebnisse liefern wie",
    "grossklein.3.example" => "SUCHMASCHINE",

    "result.title" => 'Ergebnisse',
    "result.info.1" => 'Alle Ergebnisse werden in folgender Form ausgegeben:<p><div class="image-container"><img src="/img/hilfe-php-resultpic-01.png"></div></p>',
    "result.info.open" => '"ÖFFNEN": Klicken Sie auf die Überschrift, den darunter stehenden Link (die URL) oder auch auf den Button "ÖFFNEN", um das Ergebnis zu öffnen. Ihre Browsereinstellungen bestimmen, ob dafür ein neuer TAB verwendet wird.',
    "result.info.newtab" => '"IN NEUEM TAB ÖFFNEN" öffnet das Ergebnis auf jeden Fall in einem neuen TAB.',
    "result.info.anonym" => '"ANONYM ÖFFNEN" bewirkt, dass das Ergebnis unter dem Schutz unseres Proxys geöffnet wird. Einige Infos dazu finden Sie weiter unten auf dieser Seite.',
    "result.info.more" => 'MEHR: Wenn Sie hier klicken, dann erhalten Sie neue Optionen; das Aussehen des Ergebnisses ändert sich:<p><div class="image-container"><img src="/img/hilfe-php-resultpic-02.png"></div></p>',
    "result.info.2" => 'Die neuen Optionen sind:',
    "result.info.saveresult" => '"Ergebnis speichern" (Nur Desktopversion): Dieses Ergebnis wird in einem Sammeltab gespeichert. Der TAB erscheint rechts und bleibt über beliebig viele Suchen aktiv. (siehe <a href="#searchinsearch"> Suche in der Suche</a>)',
    "result.info.domainnewsearch" => '"Auf dieser Domain neu suchen": Auf der Domain des Ergebnisses wird "genauer nachgesehen".',
    "result.info.hideresult" => '"ausblenden": Hiermit blenden Sie Ergebnisse dieser Domain aus. Sie können diesen Schalter auch direkt hinter Ihr Suchwort schreiben und auch verketten; ebenso ist ein "*" als Wildcard erlaubt. Sie können das zum Beispiel nutzen, indem Sie sich ein Suchergebnis mit den von Ihnen gewünschten Einschränkungen zusammenstellen. Dieses "speichern" Sie als Bookmark. Wenn Sie dieses Bookmark aufrufen, dann haben Sie sogleich Ihre Einstellungen verfügbar und müssen nur noch vorne Ihren Suchbegriff ändern.',
    'urls.title' => 'URLs ausschließen',
    'urls.explanation' => 'Sie können Suchergebnisse ausschließen, deren Ergebnislinks bestimmte Worte enthalten, indem Sie in ihrer Suche "-url:" verwenden.',
    'urls.example.1' => 'Beispiel: Sie möchten keine Ergebnisse bei denen im Ergebnislink das Wort "Hund" auftaucht:',
    'urls.example.2' => '<i>meine suche</i> -url:hund',

    "bang.title" => "!bangs",
    "bang.1" => "MetaGer unterstützt in geringem Umfang eine Schreibweise, die oft als „!bang“-Syntax bezeichnet wird.<br>Ein solches „!bang“ beginnt immer mit einem Ausrufezeichen und enthält keine Leerzeichen. Beispiele sind hier „!twitter“ oder „!facebook“.<br>Wird ein !bang, das wir unterstützen, in der Suchanfrage verwendet, erscheint in unseren Quicktips ein Eintrag, über den man die Suche auf Knopfdruck mit dem jeweiligen Dienst (hier Twitter oder Facebook) fortführen kann.<p>Warum sich unser Vorgehen hier von anderen Anbietern unterscheidet lesen Sie in <a href=\"/faq/#bangs\" target=\"_blank\" rel=\"noopener\">unseren FAQ</a>.",

    "searchinsearch.title" => "Suche in der Suche",
    "searchinsearch.1" => "Auf die Funktion der Suche in der Suche kann mit Hilfe des MEHR Knopfes rechts unten im Ergebniskasten zugegriffen werden. Beim Klick auf diesen öffnet sich ein Menü, in dem \"Ergebnis speichern\" an erster Stelle steht. Mit dieser Option wird das jeweilige Ergebnis in einem separaten Speicher abgelegt. Der Inhalt dieses Speichers wird rechts neben den Ergebnissen unter den Quicktips angezeigt (Auf zu kleinen Bildschirmen werden gespeicherte Ergebnisse aus Platzmangel nicht angezeigt). Dort können Sie die gespeicherten Ergebnisse nach Schlüsselworten filtern oder umsortieren lassen.
    Mehr Infos zum Thema Suche in der Suche gibt es unter <a href=\"http://blog.suma-ev.de/node/225\" target=\"_blank\" rel=\"noopener\"> http://blog.suma-ev.de/node/225</a>.",

    "dienste" => "Weitere Dienste um die Suche herum",
    "dienste.kostenlos" => "Selbstverständlich sind all unsere Dienste kostenlos",

    "app.title" => "Android-App",
    "app.1" => "Sie können MetaGer auch als App nutzen. Laden Sie sich dazu einfach die <a href=\"https://play.google.com/store/apps/details?id=de.metager.metagerapp\" target=\"_blank\" rel=\"noopener\">MetaGer App</a> auf ihr Android Smartphone.",

    "plugin.title" => "Browser-Plugin",
    "plugin.1" => "Für die meisten Browser gibt es ein MetaGer Plugin. Damit können Sie MetaGer bequem direkt von ihrer Suchzeile aus benutzen. Mehr dazu finden Sie unter <a href=\"/plugin\" rel=\"noopener\">MetaGer-Plugin hinzufügen</a>.",

    "suchwortassoziator.title" => "Suchwortassoziator",
    "suchwortassoziator.1" => 'Als Hilfe für die Erschließung eines Begriffsumfelds haben wir den <a href="/asso" target="_blank" rel="noopener">MetaGer-Web-Assoziator</a> entwickelt. Sie finden das Tool auch direkt unter dem Reiter "Dienste". Gibt man in diesen ein Suchwort ein, welches dem zu untersuchenden Fachgebiet irgendwie nahe kommt, dann wird versucht, typische Fachbegriffe dieses Gebietes aus dem WWW zu extrahieren.',
    "suchwortassoziator.2" => "Beispiel: Sie möchten mehr über Zeckenbisse und deren Gefahren wissen, aber ihnen fallen die medizinischen Fachbegriffe für Erkrankungen aus diesem Bereich nicht mehr ein. Die Eingabe des Wortes \"Zeckenbisse\" in den Web-Assoziator liefert dann u.a. die Begriffe \"Borreliose\" und \"fsme\".",
    "suchwortassoziator.3" => "Da diese Assoziationsanalyse u.a. aus Web-Dokumenten selber gewonnen wird, ist sie sprachunabhängig; d.h. Sie können bei Eingabe deutscher Wörter Fachbegriffe aus beliebigen Sprachen gewinnen (und umgekehrt). Wenn Ihnen andererseits Assoziationsanalysen auffallen, die mit Hilfe Ihrer Fachkenntnisse besser sein könnten, dann zögern Sie bitte nicht, uns dieses samt Ihrem Verbesserungsvorschlag über <a href=\"/kontakt/\" target=\"_blank\" rel=\"noopener\">unser Kontaktformular</a> mitzuteilen.",

    "widget.title" => "MetaGer Widget",
    "widget.1" => "Hierbei handelt es sich um einen Codegenerator, der es Ihnen ermöglicht, MetaGer in Ihre Webseite einzubinden. Sie können damit dann nach Belieben auf Ihrer eigenen Seite oder im Internet suchen lassen. Bei allen Fragen: <a href=\"/kontakt/\" target=\"_blank\" rel=\"noopener\">unser Kontaktformular</a>",

    "datenschutz.title" => "Anonymität und Datensicherheit",
    "datenschutz.faktencheck.heading" => "Fakten-Prüfung contra Fake-News:",
    "datenschutz.faktencheck.body.1" => '<a href="http://www.password-online.de/?wysija-page=1&controller=email&action=view&email_id=280" target="_blanK" rel="noopener">Ausführliche Anleitung und Beschreibung</a> von <a href="http://www.ude.de/" target="_blanK" rel="noopener">Albrecht Ude</a>',
    "datenschutz.faktencheck.body.2" => '<a href="/hilfe/faktencheck">Fakten-Checkliste</a>',

    "datenschutz.1" => "Tracking-Cookies, Session-IDs und IP-Adressen",
    "datenschutz.2" => "Nichts von alldem wird hier bei MetaGer verwendet, gespeichert, aufgehoben oder sonst irgendwie verarbeitet (Ausnahme: Kurzfristige Speicherung gegen Hacking- und Bot-Attacken). Weil wir diese Thematik für extrem wichtig halten, haben wir auch Möglichkeiten geschaffen, die Ihnen helfen können, hier ein Höchstmaß an Sicherheit zu erreichen: den MetaGer-TOR-Hidden-Service und unseren anonymisierenden Proxyserver.",
    "datenschutz.3" => "Mehr Informationen finden Sie weiter unten. Die Funktionen sind unter \"Dienste\" in der Navigationsleiste erreichbar.",

    "tor.title" => "Tor-Hidden-Service",
    "tor.1" => "Bei MetaGer werden schon seit vielen Jahren die IP-Adressen ausgeblendet und nicht gespeichert. Nichtsdestotrotz sind diese Adressen auf dem MetaGer-Server zeitweise, während eine Suche läuft, sichtbar: wenn MetaGer also einmal kompromittiert sein sollte, dann könnte dieser Angreifer Ihre Adressen mitlesen und speichern. Um dem höchsten Sicherheitsbedürfnis entgegenzukommen, unterhalten wir eine MetaGer-Instanz im Tor-Netzwerk: den MetaGer-TOR-hidden-Service - erreichbar über: <a href=\"/tor/\" target=\"_blank\" rel=\"noopener\">https://metager.de/tor/</a>. Für die Benutzung benötigen Sie einen speziellen Browser, den Sie auf <a href=\"https://www.torproject.org/\" target=\"_blank\" rel=\"noopener\">https://www.torproject.org/</a> herunter laden können.",
    "tor.2" => "MetaGer erreichen Sie im Tor-Browser dann unter: http://b7cxf4dkdsko6ah2.onion .",

    "proxy.title" => "Anonymisierender MetaGer-Proxyserver",
    "proxy.1" => "Um ihn zu verwenden, müssen Sie auf der MetaGer-Ergebnisseite nur auf \"ANONYM ÖFFNEN\" am unteren Rand des Ergebnisses klicken. Dann wird Ihre Anfrage an die Zielwebseite über unseren anonymisierenden Proxy-Server geleitet und Ihre persönlichen Daten bleiben weiterhin völlig geschützt. Wichtig: wenn Sie ab dieser Stelle den Links auf den Seiten folgen, bleiben Sie durch den Proxy geschützt. Sie können aber oben im Adressfeld keine neue Adresse ansteuern. In diesem Fall verlieren Sie den Schutz. Ob Sie noch geschützt sind, sehen Sie ebenfalls im Adressfeld. Es zeigt: https://proxy.suma-ev.de/?url=hier steht die eigentlich Adresse.",

    "infobutton.title" => "Was bedeutet das <i class=\"fa fa-info-circle info-details-available\" aria-hidden=\"true\"></i>, das ich an manchen Stellen sehe ?",
    "infobutton.1" => "Hier können Sie mit einem Klick weitere Informationen ausklappen, zum Beispiel detaillierte Wetterdaten.",

    "maps.title" => "MetaGer Maps",
    "maps.1" => 'Die Sicherung der Privatsphäre im Zeitalter der globalen Datenkraken hat uns auch bewogen, <a href="https://maps.metager.de" target="_blank">https://maps.metager.de</a> zu entwickeln: Der (unseres Wissens) einzige Routenplaner, der die vollen Funktionalitäten via Browser und App bietet - ohne dass Nutzer-Standorte gespeichert werden.  All dies ist nachprüfbar, denn unsere Softwaren sind Open-Source. Für die Nutzung von maps.metager.de empfehlen wir unsere schnelle App-Version. Unsere Apps können Sie unter <a href="/app" target="_blank">App beziehen</a> downloaden (oder natürlich auch über den Play-Store).',
    "maps.2" => "Diese Kartenfunktion kann auch von der MetaGer-Suche aufgerufen werden (und umgekehrt).  Sobald Sie bei MetaGer nach einem Begriff gesucht haben, sehen Sie oben rechts einen neuen Suchfokus \"Maps.metager.de\".  Beim Klick darauf gelangen Sie zu einer dazugehörigen Karte. Sie können die Funktion unter Einstellungen (Zahnradsymbol) auch dauerhaft einschalten. Wenn Sie sie speichern, so erhalten Sie ab diesem Moment einen Kartenausschnitt in der MetaGer-Ergebnisliste.",
    "maps.3" => "Die Karte zeigt nach dem Aufrufen die auch in der Spalte rechts wiedergegebenen von MetaGer gefundenen Punkte (POIs = Points of Interest). Beim Zoomen passt sich diese Liste an den Kartenausschnitt an.  Wenn Sie die Maus über eine Markierung in der Karte oder in der Liste halten, wird das jeweilige Gegenstück hervorgehoben.  Klicken Sie auf \"Details\", um genauere Informationen zu diesem Punkt aus der darunter liegenden Datenbank zu erhalten.",
    "maps.4" => "Die Karten sind mit Ausnahme der drei letzten Zoomstufen vorgerendert und damit schnell verfügbar. Die Zoomstufe steuern Sie mit dem Mausrad oder mit den Plus-Minus-Buttons oben links in der Karte.",
    "sucheingabe" => "Sucheingabe",
];
