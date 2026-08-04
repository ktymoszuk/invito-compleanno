#!/usr/bin/env bash
set -e

cd /var/www/html

# Crea il DB SQLite se non esiste
touch database/database.sqlite

# Crea un .env minimo se non esiste
if [ ! -f .env ]; then
    cp .env.example .env || true
fi

# Genera APP_KEY se assente
if ! grep -q '^APP_KEY=' .env || [ -z "$(grep '^APP_KEY=' .env | cut -d= -f2-)" ]; then
    php artisan key:generate --force || true
fi

# Ottimizzazioni ed esecuzione migrazioni in sicurezza all'avvio
php artisan config:clear || true
php artisan config:cache || true
php artisan route:cache || true
php artisan storage:link --force || true
php artisan migrate --force || true

# Avvia Nginx e PHP-FPM
nginx
exec php-fpm
