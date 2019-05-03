#!/bin/bash

set -e

cd ~/MetaGer_neu

# Start Webserver
nohup php artisan serve --port 8005 >/dev/null 2>&1 &
echo $! > ~/servePid
disown

# Start the Browserstack Proxy
~/BrowserStackLocal --key gCyHqmJnNwLhp96LgiVG 2>&1 &
echo $! > ~/browserstackPid
disown
sleep 5

./vendor/bin/phpunit