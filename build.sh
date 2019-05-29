#!/bin/bash

set -e
# Pfad zum neu geklonten Repo
path=`pwd`
cd ~/
if [ -d MetaGer_neu ]; then rm -rf MetaGer_neu;fi
git clone "$path" MetaGer_neu
cd MetaGer_neu
composer install
scp -P 63824 metager@metager3.de:~/.env .
scp -P 63824 metager@metager3.de:~/sumas.json config/
scp -P 63824 metager@metager3.de:~/sumasEn.json config/
scp -P 63824 metager@metager3.de:~/blacklistUrl.txt config/
scp -P 63824 metager@metager3.de:~/blacklistDomains.txt config/
scp -P 63824 metager@metager3.de:~/adBlacklistUrl.txt config/
scp -P 63824 metager@metager3.de:~/adBlacklistDomains.txt config/
scp -P 63824 metager@metager3.de:~/UsersSeeder.php database/seeds/
touch storage/logs/laravel.log
touch storage/logs/worker.log
touch database/metager.sqlite
chmod 777 config/sumas.json config/sumas.json database/metager.sqlite
chmod -R 777 storage
chmod -R 777 bootstrap/cache
npm install
npm run production
php artisan migrate --force
php artisan db:seed --force
php artisan requests:gather
if [ -f ~/MetaGer/artisan ]; then php ~/MetaGer/artisan down;fi
cd ~/
while [ -d ~/MetaGer ]; do rm -rf ~/MetaGer;done
mv MetaGer_neu MetaGer
sudo pkill --signal SIGHUP supervisord
php ~/MetaGer/artisan up