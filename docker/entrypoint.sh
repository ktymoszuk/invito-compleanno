#!/bin/sh
set -eu

if [ ! -f /var/www/html/.env ]; then
    cp /var/www/html/.env.example /var/www/html/.env || true
fi

if [ -z "${APP_KEY:-}" ]; then
    php /var/www/html/artisan key:generate --force || true
fi

php /var/www/html/artisan config:clear || true
php /var/www/html/artisan migrate --force || true
php /var/www/html/artisan optimize || true
php /var/www/html/artisan storage:link || true

/usr/sbin/nginx -g 'daemon off;' &
php-fpm -F
