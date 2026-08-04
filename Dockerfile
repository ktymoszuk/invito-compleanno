FROM php:8.2-fpm

ENV DEBIAN_FRONTEND=noninteractive \
    COMPOSER_ALLOW_SUPERUSER=1 \
    PHP_OPCACHE_VALIDATE_TIMESTAMPS="0" \
    PHP_OPCACHE_ENABLE="1"

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nginx \
    libicu-dev \
    libzip-dev \
    libc-client-dev \
    libkrb5-dev \
    pkg-config \
    && docker-php-ext-install pdo pdo_mysql pdo_sqlite mysqli mbstring exif pcntl bcmath gd intl zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

COPY composer.json composer.lock ./
COPY package.json package-lock.json ./

RUN composer install --no-dev --optimize-autoloader --no-interaction \
    && npm ci --no-audit --no-fund

COPY . .

RUN npm run build \
    && php artisan optimize:clear \
    && php artisan optimize \
    && php artisan storage:link \
    && chown -R www-data:www-data /var/www/html \
    && cp /var/www/html/docker/nginx.conf /etc/nginx/sites-enabled/default \
    && mkdir -p /run/php /var/log/nginx /var/www/html/storage/logs \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
