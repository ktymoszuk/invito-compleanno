FROM php:8.2-fpm

ENV DEBIAN_FRONTEND=noninteractive \
    COMPOSER_ALLOW_SUPERUSER=1 \
    PHP_OPCACHE_VALIDATE_TIMESTAMPS="0" \
    PHP_OPCACHE_ENABLE="1"

# 1. Installazione pacchetti di sistema di base
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nginx \
    libicu-dev \
    libzip-dev \
    libc-client-dev \
    libkrb5-dev \
    libssl-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# 2. Configurazione e installazione estensioni PHP (inclusi gd e imap corretti)
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-configure imap --with-kerberos --with-imap-ssl \
    && docker-php-ext-install -j$(nproc) \
       pdo \
       pdo_mysql \
       pdo_sqlite \
       mysqli \
       mbstring \
       exif \
       pcntl \
       bcmath \
       gd \
       intl \
       zip \
       imap

# 3. Installazione di Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 4. Installazione di Node.js (versione 20)
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

# 5. Copia dei file delle dipendenze
COPY composer.json composer.lock ./
COPY package.json package-lock.json ./

# 6. Installazione dipendenze PHP e Node
RUN composer install --no-dev --optimize-autoloader --no-interaction \
    && npm ci --no-audit --no-fund

# 7. Copia del resto del codice sorgente
COPY . .

# 8. Build del frontend, ottimizzazioni Laravel e permessi
RUN npm run build \
    && php artisan optimize:clear \
    && php artisan optimize \
    && php artisan storage:link \
    && chown -R www-data:www-data /var/www/html \
    && mkdir -p /run/php /var/log/nginx /var/www/html/storage/logs \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]