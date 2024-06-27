# APP

## Menyiapkan struktur deployment
```bash
$ docker create --name temp-dms dhanuprys/mantram-sesontengan:latest \
    && docker cp temp-dms:/var/www/html/.env.example ./.env \
    && docker cp temp-dms:/var/www/html/storage . \
    && docker cp temp-dms:/var/www/html/docker-compose.prod.yaml ./docker-compose.yaml \
    && docker rm temp-dms
```

## Memulai aplikasi
```bash
$ docker compose up -d
```

## Mengatur file environment (.env)
Anda dapat membuka konfigurasi environment menggunakan text editor atau menggunakan nano (jika melalui CLI)
```bash
$ nano .env
```
### Mengatur port publish aplikasi
Port publish adalah port yang akan di ekspos oleh container yang nantinya akan diakses oleh pengguna
```
APP_PORT=<angka>
```

### Mengatur database
```
DB_USERNAME -> Username database
DB_PASSWORD -> Password database
DB_DATABASE -> Nama database
```

## Melakukan migrasi
```bash
$ docker compose exec -ti webapp php artisan migrate
```

## Membuat akun admin
```bash
$ docker compose exec -ti webapp php artisan make:filament-user
```
