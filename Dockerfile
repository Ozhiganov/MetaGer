FROM debian:buster

RUN apt-get update && apt-get install -y \
    composer \
    php7.2 \
    php-mbstring \
    php7.2-xml\
    php-zip \
    php-gd \
    php-sqlite3 \
    php-mysql \
    php-curl \
    redis-server \
    sqlite3 \
    nodejs \
    libpng-dev \
    npm
RUN npm install gulp -g

COPY . /app
WORKDIR app
RUN mv config/sumas.xml.example config/sumas.xml && mv .env.example .env
RUN composer install
RUN npm install
RUN npm run dev

RUN php artisan key:generate

CMD redis-server --daemonize yes && php artisan serve --host=0.0.0.0

EXPOSE 8000
