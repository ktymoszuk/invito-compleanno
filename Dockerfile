# --- STAGE 1: Build del Frontend (Vite) ---
FROM node:20-bookworm AS frontend-build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build


# --- STAGE 2: Immagine Finale PHP/Nginx/Laravel ---
FROM php:8.2-fpm-bookworm

ENV DEBIAN_FRONTEND=noninteractive \
    COMPOSER_ALLOW_SUPERUSER=1 \
    PHP_OPCACHE_VALIDATE_TIMESTAMPS="0" \
    PHP_OPCACHE_ENABLE="1"

# 1. Installazione estensioni e dipendenze di sistema
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    nginx \
    unzip \
    zip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libicu-dev \
    libzip-dev \
    libsqlite3-dev \
    && docker-php-ext-install pdo pdo_sqlite mbstring exif pcntl bcmath gd intl zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

# 2. Copia dei file di configurazione per Composer
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# 3. Copia del resto del codice sorgente
COPY . .

# 4. Inserimento dei file compilati del frontend dal primo stage
COPY --from=frontend-build /app/public/build ./public/build

# 5. Preparazione cartelle, permessi e database SQLite di base
RUN mkdir -p /run/php /var/log/nginx /var/www/html/storage/logs /var/www/html/storage/framework/views /var/www/html/storage/framework/cache /var/www/html/storage/framework/sessions /var/www/html/storage/app/public /var/www/html/storage/app/private /var/www/html/bootstrap/cache /var/www/html/database \
    && touch /var/www/html/database/database.sqlite \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# 6. Configurazione Nginx ed Entrypoint
COPY docker/nginx.conf /etc/nginx/sites-enabled/default
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]