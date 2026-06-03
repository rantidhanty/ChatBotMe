# 04 - Cara Menjalankan Project Next.js

## Tujuan

Dokumen ini menjelaskan cara menjalankan project Next.js yang ada di folder `web/`.

## Kondisi Project Saat Ini

Saat ini struktur utamanya adalah:

- root repository: `C:\ChatBotMe`
- aplikasi Next.js: `C:\ChatBotMe\web`

Artinya semua perintah untuk menjalankan Next.js harus dilakukan dari folder `web/`.

## Yang Perlu Dipahami Dulu

Project Next.js ini punya file `package.json`.

Di dalam file itu ada beberapa script:

- `dev`
- `build`
- `start`
- `lint`

Script itu dijalankan dengan `npm run`.

## Menjalankan Mode Development

Mode development dipakai saat kamu sedang belajar dan membuat aplikasi.

Langkahnya:

1. buka terminal
2. masuk ke folder `web`
3. jalankan `npm run dev`

Contoh:

```powershell
cd C:\ChatBotMe\web
npm run dev
```

Kalau berhasil, biasanya Next.js akan memberi alamat lokal seperti:

```txt
http://localhost:3000
```

Lalu kamu buka alamat itu di browser.

## Apa Yang Terjadi Saat `npm run dev`

Saat command ini dijalankan:

- Next.js menyalakan development server
- project diproses agar bisa dibuka di browser
- perubahan file akan terdeteksi otomatis
- browser bisa menampilkan hasil terbaru tanpa setup manual yang ribet

Ini sebabnya mode development adalah mode utama saat belajar.

## Istilah Penting: Development Server

`Development server` adalah server lokal yang dipakai saat proses membuat aplikasi.

Fungsinya:

- menjalankan app di komputer sendiri
- membantu melihat hasil perubahan secara cepat
- memudahkan debug sebelum app di-deploy

Server ini hanya untuk proses pengembangan, bukan untuk production.

## Tentang Auto Update

Saat mode development aktif, perubahan file biasanya langsung dipantau oleh Next.js.

Artinya:

- kamu ubah file
- simpan file
- browser akan memperbarui tampilan

Jadi kamu tidak perlu menjalankan ulang server setiap kali mengubah file kecil.

## Menjalankan Lint

Command:

```powershell
npm run lint
```

Fungsinya:

- mengecek code style
- mencari masalah umum di code
- membantu menjaga kualitas code

Ini belum wajib kamu pakai terus-menerus sekarang, tapi nanti akan berguna.

## Build Untuk Production

Command:

```powershell
npm run build
```

Fungsinya:

- menyiapkan project untuk produksi
- memeriksa apakah app bisa dibuild dengan benar

Biasanya command ini dipakai saat:

- ingin deploy
- ingin memastikan tidak ada error build

## Menjalankan Hasil Build

Setelah build berhasil, command yang dipakai adalah:

```powershell
npm run start
```

Artinya:

- menjalankan app dari hasil build production
- bukan mode development

Untuk tahap belajar sekarang, kamu akan lebih sering memakai `npm run dev`.

## Kapan Harus Berada di Folder `web`

Kalau kamu salah posisi folder, command bisa gagal.

Contoh yang benar:

```powershell
cd C:\ChatBotMe\web
npm run dev
```

Kalau kamu masih berada di `C:\ChatBotMe`, Next.js app tidak akan dijalankan dengan benar karena `package.json` aplikasi ada di folder `web`.

## Cara Berpikir yang Benar

Untuk project ini:

- `C:\ChatBotMe` adalah root repository
- `C:\ChatBotMe\web` adalah aplikasi Next.js yang aktif

Jadi setiap kali mau mengerjakan web app, anggap folder kerja utamamu adalah `web`.

## Masalah Umum yang Sering Terjadi

### Terminal berada di folder yang salah

Gejala:

- command tidak jalan
- npm tidak menemukan script yang dimaksud

Solusi:

- pastikan terminal ada di folder `C:\ChatBotMe\web`

### Dependency belum terinstall

Gejala:

- module tidak ditemukan
- Next.js gagal dijalankan

Di project ini dependency sudah terinstall saat scaffold awal, jadi saat ini seharusnya aman.

### Port sudah dipakai

Gejala:

- `localhost:3000` tidak bisa dipakai

Biasanya Next.js akan memberi port alternatif, atau kamu perlu menutup proses lain yang memakai port yang sama.

## Ringkasan Singkat

Command yang paling penting saat ini:

```powershell
cd C:\ChatBotMe\web
npm run dev
```

Kalau tujuanmu adalah belajar sambil membangun chatbot, inilah command yang paling sering kamu gunakan.

## Langkah Belajar Setelah Ini

Setelah paham cara menjalankan Next.js, langkah berikut yang paling masuk akal adalah memahami:

- route
- page
- layout
- komponen
- API route

Urutan ini akan membuat transisi ke chatbot menjadi lebih mudah.
