# Pubblicazione su Aruba

## Hosting Linux con progetto in `home/invito-compleanno`

Se il percorso Aruba e `/web/htdocs/www.marcorossi.biz/home`, il server usa normalmente Apache. Puoi lasciare il repository completo nella sottocartella `invito-compleanno` e inoltrare il dominio alla sua cartella `public`.

La struttura sul server deve essere:

```text
/web/htdocs/www.marcorossi.biz/home/
	.htaccess
	invito-compleanno/
		.env
		artisan
		app/
		public/
			.htaccess
			index.php
			build/
			images/
			music/
		storage/
		vendor/
```

Carica `deploy/aruba/home-root.htaccess` come `/web/htdocs/www.marcorossi.biz/home/.htaccess`. Non rinominarlo dentro il repository: sul server il nome deve essere esattamente `.htaccess`.

Lascia anche `public/.htaccess` al suo posto. Il primo file inoltra le richieste a `public`; il secondo gestisce le rotte Laravel, per esempio `/invitati` e `/area-riservata/login`.

Prima dell'upload esegui `npm run build` e assicurati che sul server esistano `vendor`, `.env` e i permessi di scrittura per `storage` e `bootstrap/cache`. Imposta nel `.env`:

```dotenv
APP_ENV=production
APP_DEBUG=false
APP_URL=https://www.marcorossi.biz
```

Prova infine questi URL:

```text
https://www.marcorossi.biz/
https://www.marcorossi.biz/build/manifest.json
https://www.marcorossi.biz/invitati
```

`https://www.marcorossi.biz/invito-compleanno/.env` deve rispondere con `403` o `404`.

## Hosting Windows senza SSH

Questa procedura sostituisce il vecchio invito con il progetto Laravel/Vue. Il piano deve avere PHP 8.4, MySQL, PDO MySQL e IIS URL Rewrite. Non serve Docker.

## 1. Recupera i dati dal pannello Aruba

Annota in locale, senza inviarli in chat:

- dominio completo con `https://`;
- host MySQL;
- nome del database;
- nome utente e password MySQL;
- credenziali che vuoi usare per l'area riservata.

Verifica che HTTPS sia attivo. Chiedi all'assistenza Aruba se **PDO MySQL** e **IIS URL Rewrite** sono abilitati sul tuo hosting Windows. Questi due requisiti non possono essere verificati prima dell'upload.

## 2. Fai il backup del vecchio invito

1. Collegati con il client FTP o apri il File Manager Aruba.
2. Individua la cartella del sito: e quella che contiene l'attuale `index.html`, `default.aspx`, `index.php` o file equivalente.
3. Scarica sul Mac l'intero contenuto di quella cartella in una directory chiamata, per esempio, `backup-vecchio-invito`.
4. Se il vecchio invito usa un database, esportalo anche da phpMyAdmin in formato SQL.
5. Apri alcuni file del backup per verificare che il download sia riuscito.

Non cancellare cartelle di servizio create da Aruba, per esempio `.well-known`, `aspnet_client` o cartelle che non appartengono al vecchio sito.

## 3. Prepara il database nuovo

1. Dal pannello Aruba apri la gestione MySQL/phpMyAdmin.
2. Seleziona il database destinato al nuovo invito.
3. Apri la scheda **Importa**.
4. Carica `deploy/aruba/database.sql` e conferma.
5. Controlla che nell'elenco compaia la tabella `invitati`.

Se usi lo stesso database del vecchio invito, esportalo prima. Il file SQL usa `CREATE TABLE IF NOT EXISTS`: non cancella eventuali dati esistenti, ma una vecchia tabella `invitati` incompatibile deve essere rinominata o rimossa manualmente dopo il backup.

## 4. Crea la configurazione di produzione

Dalla root del progetto esegui:

```bash
cp deploy/aruba/.env.production.example deploy/aruba/.env.production
php artisan key:generate --show
```

Apri `deploy/aruba/.env.production` e sostituisci tutti i valori `INSERISCI_...`:

- `APP_KEY`: incolla tutta la chiave generata, incluso `base64:`;
- `APP_URL`: inserisci il dominio reale in HTTPS, senza slash finale;
- `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`: usa esattamente i dati Aruba;
- `EMAIL` e `PASSWORD`: scegli le credenziali dell'area riservata.

Non cambiare `APP_ENV=production`, `APP_DEBUG=false`, `SESSION_DRIVER=file`, `CACHE_STORE=file` o `SESSION_SECURE_COOKIE=true`. Il file contiene segreti: non pubblicarlo su Git e non inviarlo a nessuno.

## 5. Genera lo ZIP pronto per IIS

```bash
chmod +x deploy/aruba/prepare-windows-package.sh
./deploy/aruba/prepare-windows-package.sh
```

Il risultato e `deploy/aruba/invito-aruba-windows.zip`. Lo script compila Vite, installa solo le dipendenze PHP di produzione, elimina `public/hot` e controlla le impostazioni più pericolose.

## 6. Sostituisci il vecchio invito

1. Solo dopo aver verificato il backup, rimuovi dalla cartella web i file del vecchio invito, in particolare i vecchi `index.html`, `default.htm`, `default.aspx`, `index.php`, CSS, JavaScript e immagini.
2. Non rimuovere le cartelle di servizio Aruba.
3. Se il File Manager Aruba permette di estrarre ZIP, carica `invito-aruba-windows.zip` ed estrailo nella stessa cartella in cui si trovava il vecchio file iniziale.
4. Se non permette l'estrazione, estrai lo ZIP sul Mac e carica via FTP tutto il contenuto estratto. `vendor` contiene molti file: l'upload puo richiedere tempo.
5. Alla fine, `index.php`, `web.config`, `build`, `images`, `music` e `laravel` devono essere direttamente nella root del sito. Non deve esserci una cartella contenitore aggiuntiva chiamata `invito-aruba-windows`.

La struttura corretta e:

```text
ROOT DEL DOMINIO/
	index.php
	web.config
	build/
	images/
	music/
	laravel/
		.env
		app/
		bootstrap/
		storage/
		vendor/
```

Su Windows i numeri `755/775` non controllano i permessi. PHP deve poter scrivere in `laravel/storage` e `laravel/bootstrap/cache`. Se login o sessioni non persistono, chiedi ad Aruba di abilitare la scrittura per l'identita PHP/IIS su queste due cartelle.

## 7. Verifica il sito online

Apri una finestra anonima del browser e controlla nell'ordine:

1. `https://tuodominio.it/` mostra il nuovo invito.
2. `https://tuodominio.it/build/manifest.json` restituisce un file JSON.
3. `https://tuodominio.it/invitati` restituisce `[]` se non ci sono invitati approvati.
4. Invia una registrazione di prova dal modulo.
5. Accedi all'area riservata, approva il nominativo e verifica che compaia nella lista pubblica.
6. `https://tuodominio.it/laravel/.env` deve restituire 404 o 403, mai il contenuto del file.

Se continui a vedere il vecchio invito, elimina cache e dati del sito oppure prova una finestra anonima. Controlla anche che non sia rimasto un vecchio `index.html`: IIS potrebbe servirlo prima di `index.php` se il nuovo `web.config` non viene applicato.

## 8. Errori e ripristino

- **500.19**: `web.config` o IIS URL Rewrite non sono accettati. Conserva il codice completo e contatta Aruba.
- **500 generico**: controlla `laravel/storage/logs/laravel.log`, dati MySQL, `APP_KEY` e permessi di scrittura.
- **could not find driver**: PDO MySQL non e abilitato.
- **419 Page Expired** o login che non resta attivo: controlla HTTPS e scrittura in `laravel/storage/framework/sessions`.
- **404 su `/invitati`**: IIS URL Rewrite non sta inoltrando le rotte a `index.php`.

Per tornare al vecchio invito, elimina i file appena caricati e rimetti nella root il backup FTP. Se hai sostituito un database, reimporta anche il suo backup SQL.
