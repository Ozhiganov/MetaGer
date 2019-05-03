<?php

namespace Tests\Feature;

use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverExpectedCondition;
use Tests\TestCase;

class StaticPagesTest extends TestCase
{
    private $caps = array(
        "browser" => "Firefox",
        "browser_version" => "67.0 beta",
        "browserstack.local" => "true",
        "os" => "Windows",
        "os_version" => "10",
        "resolution" => "1920x1080",
    );
    private $webdriver;
    private $mgServer = "http://localhost:8000";
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        try {
            $this->webdriver = RemoteWebDriver::create(
                getenv("WEBDRIVER_URL"),
                $this->caps
            );

            $this->startPageTest();
            $this->navigationMenuTest();
        } finally {
            $this->webdriver->quit();
        }
    }

    private function startPageTest()
    {
        $this->webdriver->get($this->mgServer);

        # Test for Page Title
        $this->assertEquals($this->webdriver->getTitle(), "MetaGer - Mehr als eine Suchmaschine");

        # Test for Partner Links
        $elements = $this->webdriver->findElements(WebDriverBy::cssSelector("#s .sr > a"));
        $this->assertCount(2, $elements);
    }

    /**
     * Tests if the Navigation menu expands on click
     * Checks the status code of every link in it
     */
    private function navigationMenuTest()
    {
        $this->webdriver->get($this->mgServer);

        // Check if the Navigation menu expands on click
        $sidebarToggle = $this->webdriver->findElement(WebDriverBy::cssSelector("label[for=sidebarToggle]"));
        $sidebarToggle->click();
        $this->webdriver->wait(5, 500)->until(
            WebDriverExpectedCondition::visibilityOfElementLocated(WebDriverBy::cssSelector(".sidebar > a.sidebar-logo"))
        );

        // Navigationbar is working
        // Let's test if the Links are reachable
        $elements = $this->webdriver->findElements(WebdriverBy::cssSelector(".sidebar > .sidebar-list a"));
        $this->assertIsArray($elements);
        $this->assertGreaterThan(0, sizeof($elements));

        foreach ($elements as $element) {
            $link = $element->getAttribute("href");
            $ch = curl_init($link);
            $httpcode = 0;
            try {
                curl_setopt($ch, CURLOPT_HEADER, true); // we want headers
                //curl_setopt($ch, CURLOPT_NOBODY, true); // we don't need body
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_TIMEOUT, 10);
                curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
                curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
                curl_exec($ch);
                $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            } finally {
                curl_close($ch);
            }

            $this->assertTrue($httpcode >= 200 && $httpcode < 400, "Status Code (" . $httpcode . ") of " . $link . " doesn't match!");
        }

        // Check if the Navigation menu hides on click
        $sidebarToggle->click();
        $this->webdriver->wait(5, 500)->until(
            WebDriverExpectedCondition::invisibilityOfElementLocated(WebDriverBy::cssSelector(".sidebar > a.sidebar-logo"))
        );

    }
}
