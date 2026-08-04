#!/usr/bin/env bash
set -e

# Crea il DB SQLite se non esiste
touch /var/www/html/database/database.sqlite

# Ottimizzazioni ed esecuzione migrazioni in sicurezza all'avvio
php artisan config:cache
php artisan route:cache
php artisan storage:link --force
php artisan migrate --force

# Avvia Nginx e PHP-FPM
nginx
exec php-fpm
