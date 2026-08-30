#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
DEPLOY_DIR="$PROJECT_DIR/deploy/aruba"
ENV_FILE="$DEPLOY_DIR/.env.production"
STAGE_DIR="$PROJECT_DIR/.deploy/aruba-site"
ARCHIVE="$DEPLOY_DIR/invito-aruba.zip"

if [[ ! -f "$ENV_FILE" ]]; then
    printf 'Manca %s\n' "$ENV_FILE"
    printf 'Copia .env.production.example, compila i valori Aruba e genera APP_KEY con: php artisan key:generate --show\n'
    exit 1
fi

if grep -Eq 'INSERISCI_|example\.it' "$ENV_FILE"; then
    printf 'Il file %s contiene ancora valori segnaposto.\n' "$ENV_FILE"
    exit 1
fi

if ! grep -Eq '^APP_KEY=base64:.+' "$ENV_FILE"; then
    printf 'APP_KEY non valida. Generane una con: php artisan key:generate --show\n'
    exit 1
fi

command -v composer >/dev/null || { printf 'Composer non trovato.\n'; exit 1; }
command -v npm >/dev/null || { printf 'npm non trovato.\n'; exit 1; }
command -v rsync >/dev/null || { printf 'rsync non trovato.\n'; exit 1; }
command -v zip >/dev/null || { printf 'zip non trovato.\n'; exit 1; }

cd "$PROJECT_DIR"
npm run build

rm -rf "$STAGE_DIR" "$ARCHIVE"
mkdir -p "$STAGE_DIR"

rsync -a ./ "$STAGE_DIR/" \
    --exclude='.deploy/' \
    --exclude='.env' \
    --exclude='.env.*' \
    --exclude='.git/' \
    --exclude='.github/' \
    --exclude='deploy/' \
    --exclude='node_modules/' \
    --exclude='public/hot' \
    --exclude='storage/logs/*.log' \
    --exclude='tests/' \
    --exclude='vendor/'

cp "$ENV_FILE" "$STAGE_DIR/.env"
cp "$DEPLOY_DIR/root.htaccess" "$STAGE_DIR/.htaccess"

composer install \
    --working-dir="$STAGE_DIR" \
    --no-dev \
    --prefer-dist \
    --optimize-autoloader \
    --classmap-authoritative \
    --no-interaction

rm -f "$STAGE_DIR/public/hot"
find "$STAGE_DIR/storage" "$STAGE_DIR/bootstrap/cache" -type d -exec chmod 775 {} +
find "$STAGE_DIR/storage" "$STAGE_DIR/bootstrap/cache" -type f -exec chmod 664 {} +

cd "$STAGE_DIR"
COPYFILE_DISABLE=1 zip -qry "$ARCHIVE" .
printf '\nPacchetto creato: %s\n' "$ARCHIVE"
printf 'SQL da importare: %s\n' "$DEPLOY_DIR/database.sql"
