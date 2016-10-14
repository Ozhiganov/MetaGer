<?php

use App\MetaGer;
use App\Models\Result;
use Illuminate\Http\Request;

class ResultPhpTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test()
    {
        $this->rankingTest();
        $this->isValidTest();
        $this->linkGeneratorsTest();
    }

    public function getDummyResult()
    {
        $provider    = file_get_contents("tests/testSumas.xml");
        $titel       = "Titel";
        $link        = "link.de";
        $anzeigeLink = "link.de/anzeige";
        $descr       = "Beschreibung: i want phrase";
        $gefVon      = "";
        $sourceRank  = 1;
        return new Result($provider, $titel, $link, $anzeigeLink, $descr, $gefVon, $sourceRank);
    }

    public function getDummyMetaGer()
    {
        $metager = new MetaGer();
        $request = $this->createDummyRequest();
        $metager->parseFormData($request);
        $metager->checkSpecialSearches($request);
        return $metager;
    }

    public function createDummyRequest()
    {
        $query                = [];
        $query["eingabe"]     = 'suchwort -blackword -host:blackhost -domain:blackdomain site:wantsite "i want phrase"';
        $query["focus"]       = "angepasst";
        $query["encoding"]    = "utf8";
        $query["lang"]        = "all";
        $query["time"]        = "1000";
        $query["sprueche"]    = "on";
        $query["resultCount"] = "20";
        $query["tab"]         = "on";
        $query["onenewspage"] = "on";

        return new Request($query);
    }

    public function rankingTest()
    {
        $result = $this->getDummyResult();
        $result->rank("link"); # 0.38, 0.38512820512820511 mit url-boost auch bei description länge > 0 statt > 80
        $this->assertEquals(0.4, $result->getRank(), "Not within Range of Actual Value", 0.1);
        $result->rank("titel"); # 0.38419999999999999
        $this->assertEquals(0.4, $result->getRank(), "Not within Range of Actual Value", 0.1);
        $result->rank("beschreibung"); # 0.38280000000000003
        $this->assertEquals(0.4, $result->getRank(), "Not within Range of Actual Value", 0.1);
        $result->rank("baum"); # 0.38
        $this->assertEquals(0.4, $result->getRank(), "Not within Range of Actual Value", 0.1);
    }

    public function isValidTest()
    {
        $result  = $this->getDummyResult();
        $metager = $this->getDummyMetaGer();
        $this->assertTrue($result->isValid($metager));
    }

    public function linkGeneratorsTest()
    {
        $result = $this->getDummyResult();
        $this->equalCallbackTester($result, "getStrippedHost", ["http://www.foo.bar.de/test?ja=1"],
            'foo.bar.de');
        $this->equalCallbackTester($result, "getStrippedLink", ["http://www.foo.bar.de/test?ja=1"],
            'foo.bar.de/test');
        $this->equalCallbackTester($result, "getStrippedDomain", ["http://www.foo.bar.de/test?ja=1"],
            'bar.de');
        $this->equalCallbackTester($result, "generateProxyLink", ["news"],
            'focus=news');
    }

    public function equalCallbackTester($object, $funcName, $input, $expectedInOutput)
    {
        $output = call_user_func_array(array($object, $funcName), $input);
        $this->assertEquals($expectedInOutput, $output);
    }
}
