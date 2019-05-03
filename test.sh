#!/bin/bash

set -e

cd ~/MetaGer_neu

# Start Webserver
php artisan serve --port 8005 >/dev/null 2>&1 &
servePid=$!

# Start the Browserstack Proxy
~/BrowserStackLocal --key gCyHqmJnNwLhp96LgiVG 2>&1 &
browserstackPid=$!
sleep 5

./vendor/bin/phpunit