#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
DEPLOY_DIR="$PROJECT_DIR/deploy/aruba"
ENV_FILE="$DEPLOY_DIR/.env.production"
STAGE_DIR="$PROJECT_DIR/.deploy/aruba-windows-site"
CORE_DIR="$STAGE_DIR/laravel"
ARCHIVE="$DEPLOY_DIR/invito-aruba-windows.zip"

if [[ ! -f "$ENV_FILE" ]]; then
    printf 'Manca %s\n' "$ENV_FILE"
    printf 'Copia .env.production.example, compila i valori Aruba e genera APP_KEY con: php artisan key:generate --show\n'
    exit 1
fi

if grep -Eq 'INSERISCI_|example\.it' "$ENV_FILE"; then
    printf 'Il file %s contiene ancora valori segnaposto.\n' "$ENV_FILE"
    exit 1
fi

if ! grep -Eq '^APP_KEY=base64:[A-Za-z0-9+/]{43}=$' "$ENV_FILE"; then
    printf 'APP_KEY non valida. Generane una con: php artisan key:generate --show\n'
    exit 1
fi

declare -a REQUIRED_SETTINGS=(
    '^APP_ENV=production$'
    '^APP_DEBUG=false$'
    '^APP_URL=https://[^[:space:]]+$'
    '^DB_CONNECTION=mysql$'
    '^SESSION_DRIVER=file$'
    '^SESSION_SECURE_COOKIE=true$'
    '^CACHE_STORE=file$'
    '^QUEUE_CONNECTION=sync$'
)

for setting in "${REQUIRED_SETTINGS[@]}"; do
    if ! grep -Eq "$setting" "$ENV_FILE"; then
        printf 'Configurazione di produzione mancante o non sicura: %s\n' "$setting"
        exit 1
    fi
done

command -v composer >/dev/null || { printf 'Composer non trovato.\n'; exit 1; }
command -v npm >/dev/null || { printf 'npm non trovato.\n'; exit 1; }
command -v rsync >/dev/null || { printf 'rsync non trovato.\n'; exit 1; }
command -v zip >/dev/null || { printf 'zip non trovato.\n'; exit 1; }

cd "$PROJECT_DIR"
npm run build

rm -rf "$STAGE_DIR" "$ARCHIVE"
mkdir -p "$CORE_DIR"

# Il contenuto pubblico viene messo direttamente nella document root IIS.
rsync -a public/ "$STAGE_DIR/" \
    --exclude='.htaccess' \
    --exclude='hot'

# Il framework rimane in una cartella nascosta da IIS.
rsync -a ./ "$CORE_DIR/" \
    --exclude='.deploy/' \
    --exclude='.env' \
    --exclude='.env.*' \
    --exclude='.git/' \
    --exclude='.github/' \
    --exclude='deploy/' \
    --exclude='node_modules/' \
    --exclude='public/' \
    --exclude='storage/logs/*.log' \
    --exclude='tests/' \
    --exclude='vendor/'

cp "$ENV_FILE" "$CORE_DIR/.env"
cp "$DEPLOY_DIR/windows-index.php" "$STAGE_DIR/index.php"
cp "$DEPLOY_DIR/web.config" "$STAGE_DIR/web.config"

composer install \
    --working-dir="$CORE_DIR" \
    --no-dev \
    --prefer-dist \
    --optimize-autoloader \
    --classmap-authoritative \
    --no-interaction

find "$CORE_DIR/storage" "$CORE_DIR/bootstrap/cache" -type d -exec chmod 775 {} +
find "$CORE_DIR/storage" "$CORE_DIR/bootstrap/cache" -type f -exec chmod 664 {} +

cd "$STAGE_DIR"
COPYFILE_DISABLE=1 zip -qry "$ARCHIVE" .
printf '\nPacchetto Windows creato: %s\n' "$ARCHIVE"
printf 'SQL da importare in phpMyAdmin: %s\n' "$DEPLOY_DIR/database.sql"
