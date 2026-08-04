#!/usr/bin/env bash
set -e

cd /var/www/html

# Crea il DB SQLite se non esiste
touch database/database.sqlite

# Assicura le directory di storage richieste da Laravel
mkdir -p storage/framework/views storage/framework/cache storage/framework/sessions storage/app/public storage/app/private storage/logs bootstrap/cache

# Crea un .env minimo se non esiste
if [ ! -f .env ]; then
    if [ -f .env.production ]; then
        cp .env.production .env
    elif [ -f .env.example ]; then
        cp .env.example .env
    fi
fi

# Se siamo in produzione, usa il file di configurazione HTTPS
if [ "$APP_ENV" = "production" ] || [ "$APP_ENV" = "prod" ]; then
    if [ -f .env.production ]; then
        cp /var/www/html/.env.production /var/www/html/.env 2>/dev/null || true
    fi
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
