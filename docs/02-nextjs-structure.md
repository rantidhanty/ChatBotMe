# 02 - Memahami Struktur Awal Next.js

## Tujuan

Dokumen ini menjelaskan struktur awal proyek Next.js yang baru dibuat di folder `web/`.

Project ini masih berupa scaffold default. Belum ada logic chatbot.

## Struktur Level Atas

Di root repository saat ini ada:

- `CLAUDE.md`
- `docs/`
- `web/`

### Penjelasan

- `CLAUDE.md` berisi catatan arah proyek chatbot
- `docs/` berisi dokumentasi belajar
- `web/` berisi aplikasi Next.js yang nanti akan menjadi web chatbot

## Struktur di Dalam `web/`

Folder dan file penting:

- `package.json`
- `README.md`
- `AGENTS.md`
- `src/`
- `public/`

Folder yang belum perlu terlalu dipikirkan:

- `node_modules/`
- `.next/`
- `.git/`

## Penjelasan File Penting

### `package.json`

File ini adalah pusat konfigurasi project JavaScript.

Fungsi utamanya:

- menyimpan nama project
- menyimpan dependency
- menyimpan command yang bisa dijalankan

Script penting:

- `npm run dev` untuk menjalankan project di mode development
- `npm run build` untuk build production
- `npm run start` untuk menjalankan hasil build
- `npm run lint` untuk mengecek kualitas code

## Folder `src/app`

Project ini memakai App Router.

Artinya halaman dan struktur utama aplikasi diletakkan di dalam `src/app`.

File yang sekarang ada:

- `layout.tsx`
- `page.tsx`
- `globals.css`
- `page.module.css`
- `favicon.ico`

### `layout.tsx`

Ini adalah layout global.

Fungsinya:

- membungkus semua halaman
- memuat CSS global
- memasang font global
- menyimpan metadata dasar seperti title dan description

Kalau nanti ada banyak halaman, semuanya tetap lewat layout ini.

### `page.tsx`

Ini adalah halaman utama untuk route `/`.

Sekarang isinya masih template bawaan Next.js.

Nanti file ini bisa menjadi halaman awal chatbot kamu.

### `globals.css`

Ini adalah CSS global untuk seluruh aplikasi.

Biasanya dipakai untuk:

- warna dasar aplikasi
- reset CSS
- styling `body`, `html`, dan elemen umum

### `page.module.css`

Ini adalah CSS khusus untuk `page.tsx`.

Bedanya dengan `globals.css`:

- `globals.css` berlaku ke seluruh aplikasi
- `page.module.css` hanya berlaku ke halaman yang mengimpornya

### `favicon.ico`

Ini adalah icon kecil yang muncul di tab browser.

## Folder `public/`

Folder `public/` dipakai untuk file statis.

Contohnya:

- logo
- icon
- gambar

File di folder ini bisa dipanggil langsung dari browser.

## Cara Kerja Render Sederhana

Saat project dijalankan:

1. Next.js membaca `layout.tsx`
2. Next.js membaca `page.tsx`
3. CSS global dimuat dari `globals.css`
4. halaman dirender di browser

Urutan sederhananya:

- `layout.tsx` adalah kerangka
- `page.tsx` adalah isi halaman
- `globals.css` adalah style umum
- `page.module.css` adalah style lokal halaman

## Hubungan Dengan Chatbot Nanti

Saat proyek berkembang, kemungkinan struktur tambahan akan seperti ini:

- `src/components/` untuk komponen UI
- `src/lib/` untuk helper dan logic internal
- `src/lib/providers/` untuk integrasi provider AI
- `src/app/api/chat/route.ts` untuk endpoint chat

Bagian ini belum dibuat sekarang. Ini hanya arah struktur ke depan.

## Fokus Belajar Saat Ini

Sebelum masuk ke chatbot, pahami dulu:

- fungsi `package.json`
- fungsi `layout.tsx`
- fungsi `page.tsx`
- perbedaan `globals.css` dan `page.module.css`

Kalau empat hal ini sudah paham, langkah berikutnya akan jauh lebih mudah.
