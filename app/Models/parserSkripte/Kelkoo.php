<?php

namespace app\Models\parserSkripte;

use App\Models\Searchengine;
use Log;

class Kelkoo extends Searchengine
{
    public $results = [];
    public $unsignedGetString = "";

    public function __construct($name, \StdClass $engine, \App\MetaGer $metager)
    {
        parent::__construct($name, $engine, $metager);
        $this->unsignedGetString = $this->getString;
        $this->getString = $this->UrlSigner($this->unsignedGetString);
        # var_dump($this->getString);
        $this->hash = md5($this->engine->host . $this->getString . $this->engine->port . $this->name);
    }

       
    public function loadResults($result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
       # var_dump($result);
       # die();
        # delete namespace, allowing easier xpath access
        $result = str_replace('xmlns="urn:yahoo:prods"', '', $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }
            # Kekloo gives us the total Result Count
            $resultCount = $content->xpath('/ProductSearch/Products/@totalResultsAvailable');
            if (sizeof($resultCount) > 0) {
                $resultCount = intval($resultCount[0]->__toString());
            } else {
                $resultCount = 0;
            }
            $this->totalResults = $resultCount;
            $results = $content->xpath('/ProductSearch/Products/Product/Offer');

            foreach ($results as $result) {
                $result      = simplexml_load_string($result->saveXML());

                $title       = $result->Title[0]->__toString();
                
                $price = floatval($result->Price[0]->Price[0]);
                $deliveryPrice = floatval($result->Price[0]->DeliveryCost[0]);
                $totalPrice = $price + $deliveryPrice;

                $descr = "";
            
                if(isset($result->Description[0]))
                {
                    $descr       = $result->Description[0]->__toString();
                }
                $descr .= "<p>Preis: " . $price . " €</p>";
                $image       = $result->Images[0]->Image[0]->Url[0]->__toString();
                $link        = $result->Url[0]->__toString();
                $anzeigeLink = $result->Merchant[0]->Name[0]->__toString();
                $this->counter++;
                $this->results[] = new \App\Models\Result(
                    $this->engine,
                    $title,
                    $link,
                    $anzeigeLink,
                    $descr,
                    $this->engine->{"display-name"},$this->engine->homepage,
                    $this->counter,
                    ['image' => $image,
                     'price' => $totalPrice * 100]
                );
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
    }

    public function getNext(\App\MetaGer $metager, $result)
    {
        $result = preg_replace("/\r\n/si", "", $result);
        # delete namespace, allowing easier xpath access
        $result = str_replace('xmlns="urn:yahoo:prods"', '', $result);
        try {
            $content = simplexml_load_string($result);
            if (!$content) {
                return;
            }
        } catch (\Exception $e) {
            Log::error("A problem occurred parsing results from $this->name:");
            Log::error($e->getMessage());
            return;
        }
        # Kekloo gives us the total Result Count
        $resultCount = $content->xpath('/ProductSearch/Products/@totalResultsAvailable');
        if (sizeof($resultCount) > 0) {
            $resultCount = intval($resultCount[0]->__toString());
        } else {
            $resultCount = 0;
        }
        $this->totalResults = $resultCount;

        // Get the current Result Position
        $current = 0;
        if (strpos($this->getString, "&start=") !== false) {
            $tmp = substr($this->getString, strpos($this->getString, "&start=") + 7);
            if (strpos($tmp, "&") !== false) {
                $tmp = substr($tmp, 0, strpos($tmp, "&"));
            }
            $current = intval($tmp);
        }

        if ($current >= ($this->totalResults - 20)) {
            return;
        }

        # Erstellen des neuen Suchmaschinenobjekts und anpassen des GetStrings:
        $next = new Kelkoo($this->name, $this->engine, $metager);
        $next->unsignedGetString .= "&start=" . ($current + 20);
        $next->getString = $next->UrlSigner($next->unsignedGetString);
        
        $next->hash = md5($next->engine->host . $next->getString . $next->engine->port . $next->name);
        $this->next = $next;
    }


    # kelkoogroup.com/kelkoo-customer-service/kelkoo-developer-network/shopping-services/samples/signing-url-php/
    public function UrlSigner($path){
        
        $urlPath = $path;
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
        $URLtmp = $urlPath . "&" . $URL_partner . "=" . $partner . "&" . $URL_ts . "=" . $time;
       
        // URL needed to create the token
        $s = $urlPath . "&" . $URL_partner . "=" . $partner . "&" . $URL_ts . "=" . $time . $key;
        $token = "";
        $token = base64_encode(pack('H*', md5($s)));
        $token = str_replace(array("+", "/", "="), array(".", "_", "-"), $token);
        $URLreturn = $URLtmp . "&" . $URL_sig . "=" . $token;
        return $URLreturn;

    }
}
