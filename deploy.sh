#!/bin/bash

set -e 

cd ~/MetaGer_neu
php artisan requests:gather
if [ -f ~/MetaGer/artisan ]; then php ~/MetaGer/artisan down;fi
cd ~/
while [ -d ~/MetaGer ]; do rm -rf ~/MetaGer;done
mv MetaGer_neu MetaGer
sudo pkill --signal SIGHUP supervisord
php ~/MetaGer/artisan up