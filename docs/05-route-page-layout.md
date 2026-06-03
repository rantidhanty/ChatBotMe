# 05 - Memahami Route, Page, dan Layout di Next.js

## Tujuan

Dokumen ini menjelaskan tiga istilah dasar yang sangat penting di Next.js:

- `route`
- `page`
- `layout`

Tujuannya bukan untuk dihafal, tapi untuk dipahami cara kerjanya.

## Gambaran Paling Sederhana

Bayangkan aplikasi web seperti bangunan.

- `route` adalah alamat ruang yang ingin dibuka
- `page` adalah isi ruang itu
- `layout` adalah kerangka besar yang membungkus ruang tersebut

Contoh cara berpikirnya:

- user membuka `/`
- Next.js mencari halaman untuk route `/`
- halaman itu dirender di dalam layout yang sesuai

## Apa Itu Route

`Route` adalah alamat URL di aplikasi.

Contoh:

- `/`
- `/about`
- `/chat`
- `/settings`

Kalau user membuka `/chat`, berarti user sedang menuju route `/chat`.

Jadi route itu tidak sama dengan tampilan. Route adalah alamatnya.

## Apa Itu Page

`Page` adalah file yang menjadi isi halaman untuk sebuah route.

Di App Router Next.js, file `page.tsx` dipakai untuk mewakili halaman.

Contoh sederhana:

- `src/app/page.tsx` mewakili route `/`
- `src/app/chat/page.tsx` mewakili route `/chat`
- `src/app/about/page.tsx` mewakili route `/about`

Artinya:

- nama folder membantu membentuk URL
- file `page.tsx` adalah isi halaman untuk URL itu

## Apa Itu Layout

`Layout` adalah pembungkus bersama untuk satu atau beberapa halaman.

Fungsinya biasanya untuk hal-hal yang sama di banyak halaman, misalnya:

- struktur HTML dasar
- navbar
- sidebar
- footer
- font global
- metadata umum

Di project kamu sekarang ada:

- `src/app/layout.tsx`

Itu artinya layout tersebut menjadi layout utama untuk seluruh app.

## Hubungan Antara Ketiganya

Urutannya bisa dipahami seperti ini:

1. user membuka sebuah route
2. Next.js mencari `page.tsx` yang cocok
3. halaman itu dibungkus oleh `layout.tsx`
4. hasil akhirnya ditampilkan di browser

Jadi:

- route = alamat
- page = isi
- layout = pembungkus

## Contoh Dari Project Kamu Sekarang

Saat ini project kamu punya:

- `src/app/layout.tsx`
- `src/app/page.tsx`

Artinya:

- route `/` sudah ada
- isi route `/` berasal dari `page.tsx`
- isi itu dibungkus oleh `layout.tsx`

Karena belum ada folder lain di dalam `src/app`, maka saat ini route yang aktif baru halaman utama saja.

## Cara Membaca Struktur Folder

Misalnya nanti ada struktur seperti ini:

```txt
src/
  app/
    layout.tsx
    page.tsx
    chat/
      page.tsx
    settings/
      page.tsx
```

Maka artinya:

- `app/page.tsx` adalah route `/`
- `app/chat/page.tsx` adalah route `/chat`
- `app/settings/page.tsx` adalah route `/settings`

## Kenapa File Bukan Nama Bebas

Di Next.js App Router, nama file tertentu punya arti khusus.

Contohnya:

- `page.tsx` berarti halaman
- `layout.tsx` berarti layout

Jadi framework membaca struktur folder dan nama file untuk menentukan perilaku aplikasi.

Ini disebut pendekatan berbasis konvensi.

Artinya:

- kita tidak perlu menulis konfigurasi routing panjang
- kita cukup mengikuti aturan struktur yang sudah ditentukan Next.js

## Cara Memahami Dengan Logika, Bukan Hafalan

Supaya tidak sekadar menghafal, pakai pertanyaan ini:

Saat melihat file, tanyakan:

- apakah ini alamat?
- apakah ini isi halaman?
- apakah ini pembungkus?

Kalau yang dimaksud adalah URL, itu route.

Kalau yang dimaksud adalah isi tampilan untuk URL itu, itu page.

Kalau yang dimaksud adalah kerangka bersama yang membungkus halaman, itu layout.

## Kenapa Ini Penting Untuk Chatbot

Nanti saat bikin chatbot, kemungkinan kamu akan punya kebutuhan seperti ini:

- route `/` untuk landing page
- route `/chat` untuk halaman chat utama
- layout global untuk seluruh app

Kalau konsep ini sudah paham, kamu akan lebih mudah membaca dan membangun struktur project sendiri.

## Kesalahan Umum Pemula

### Mengira route adalah file

Sebenarnya route adalah alamat URL.

File hanya menjadi cara Next.js memetakan alamat itu.

### Mengira page dan layout adalah hal yang sama

Tidak sama.

- `page` adalah isi halaman
- `layout` adalah pembungkus halaman

### Menghafal struktur tanpa memahami fungsi

Cara yang lebih baik adalah memahami perannya:

- user membuka alamat
- Next.js mencari halaman
- layout membungkus halaman

Kalau urutan logika ini paham, struktur folder akan lebih mudah masuk akal.

## Ringkasan

Pahami seperti ini:

- `route` = alamat URL
- `page` = isi halaman untuk alamat itu
- `layout` = pembungkus bersama untuk halaman

Di project kamu sekarang:

- route yang ada baru `/`
- `page.tsx` adalah isi halaman utama
- `layout.tsx` adalah pembungkus globalnya

## Langkah Belajar Setelah Ini

Setelah ini, topik yang paling cocok dipelajari adalah:

- komponen
- props
- perbedaan frontend dan backend di Next.js

Itu akan menjadi jembatan sebelum masuk ke API chat.
