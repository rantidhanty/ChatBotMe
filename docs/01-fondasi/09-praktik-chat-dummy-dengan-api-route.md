# 09 - Praktik Chat Dummy dengan API Route

## Tujuan

Dokumen ini menjelaskan latihan praktik pertama yang sekarang sudah ada di project.

Latihan ini sengaja dibuat sederhana agar kamu bisa melihat alur dasar chatbot tanpa langsung masuk ke OpenAI.

## Apa yang Dibuat

Latihan ini menambahkan tiga bagian utama:

- halaman chat di `/chat`
- komponen client interaktif untuk input dan daftar pesan
- endpoint backend dummy di `/api/chat`

Jadi sekarang project tidak lagi hanya berisi scaffold kosong.

Sudah ada latihan nyata yang bisa dijalankan dan diamati.

## Tujuan Belajar dari Latihan Ini

Latihan ini dipakai untuk memperlihatkan beberapa konsep sekaligus:

- `page` sebagai halaman route
- `props` sebagai data yang dikirim ke komponen
- `Client Component` untuk interaksi user
- `Route Handler` sebagai backend sederhana
- alur request dari frontend ke backend lalu kembali ke frontend

## Struktur File yang Ditambahkan

File penting untuk latihan ini:

- `web/src/app/chat/page.tsx`
- `web/src/app/chat/page.module.css`
- `web/src/components/chat/ChatPlayground.tsx`
- `web/src/components/chat/ChatPlayground.module.css`
- `web/src/app/api/chat/route.ts`
- `web/src/types/chat.ts`

## Cara Membaca Alurnya

### 1. Page Menyiapkan Data Awal

File:

- `web/src/app/chat/page.tsx`

Perannya:

- menjadi halaman untuk route `/chat`
- menyiapkan `initialMessages`
- mengirim data awal itu ke komponen `ChatPlayground`

Ini membantu menunjukkan bahwa data bisa mengalir dari halaman ke komponen lewat `props`.

## 2. Komponen Client Menangani Interaksi

File:

- `web/src/components/chat/ChatPlayground.tsx`

Perannya:

- memakai `"use client"`
- menyimpan state pesan
- membaca input user
- mengirim request ke backend saat form disubmit
- menampilkan balasan ke layar

Ini adalah contoh bagian frontend yang benar-benar interaktif.

## 3. Backend Dummy Menjawab Request

File:

- `web/src/app/api/chat/route.ts`

Perannya:

- menerima request `POST`
- membaca body JSON
- memvalidasi apakah `message` berisi teks
- mengembalikan balasan JSON sederhana

Balasannya masih dummy.

Itu sengaja.

Fokus latihan ini adalah memahami bentuk arsitektur dulu, bukan kualitas AI dulu.

## Alur Request Lengkap

Kalau dijelaskan urut, alurnya seperti ini:

1. user membuka route `/chat`
2. `page.tsx` dirender dan menyiapkan data awal
3. data awal dikirim ke `ChatPlayground` lewat `props`
4. user mengetik pesan lalu menekan tombol kirim
5. `ChatPlayground` mengirim request ke `/api/chat`
6. `route.ts` menerima request itu di backend
7. backend membuat balasan dummy
8. frontend menerima response JSON
9. frontend menambahkan balasan ke daftar pesan

Inilah bentuk dasar aplikasi chatbot yang nanti akan terus dikembangkan.

## Kenapa Ini Penting

Kalau kamu sudah paham latihan kecil ini, kamu sudah mulai paham fondasi besar untuk chatbot:

- route halaman
- komponen interaktif
- aliran `props`
- API request
- backend layer

Nanti saat OpenAI dipasang, bentuk alurnya tetap mirip.

Yang berubah hanya sumber balasannya:

- sekarang dari backend dummy
- nanti dari provider AI sungguhan

## Cara Menjalankan

Masuk ke folder `web` lalu jalankan:

```powershell
cd C:\ChatBotMe\web
npm run dev
```

Lalu buka:

- `http://localhost:3000/`
- `http://localhost:3000/chat`

## Cara Mengamati Dengan Benar

Saat membuka `/chat`, coba perhatikan pertanyaan ini:

- data awal pesan datang dari mana
- komponen mana yang interaktif
- request dikirim ke file mana
- balasan dummy dibuat di file mana
- setelah response diterima, siapa yang menampilkan ulang daftar pesan

Kalau kamu bisa menjawab lima pertanyaan itu, berarti latihan ini mulai benar-benar kamu pahami.

## Ringkasan

Pahami latihan ini seperti ini:

- `/chat` adalah halaman latihan
- `ChatPlayground` adalah frontend interaktif
- `/api/chat` adalah backend dummy
- `props` dipakai untuk data antar komponen
- API dipakai untuk request frontend ke backend

## Langkah Setelah Ini

Setelah latihan ini dipahami, langkah berikutnya yang sehat adalah:

- membedah file satu per satu
- menambahkan penjelasan tentang `Route Handler`
- lalu mulai merapikan struktur komponen chat
