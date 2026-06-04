# 08 - Memahami Frontend dan Backend di Next.js

## Tujuan

Dokumen ini menjelaskan perbedaan `frontend` dan `backend` di Next.js dengan bahasa sederhana.

Materi ini penting karena project chatbot nanti selalu bergerak di dua sisi:

- sisi tampilan yang dilihat user
- sisi server yang menangani request dan menjaga hal sensitif seperti API key

## Gambaran Sederhana

Bayangkan aplikasi chatbot punya dua area kerja:

- area yang tampil di browser user
- area yang bekerja di server

Di Next.js, dua area ini bisa hidup di satu project yang sama.

Jadi:

- kita tidak harus memisahkan frontend dan backend ke dua repository dari awal
- tetapi kita tetap harus paham mana logic yang cocok di browser dan mana yang harus tinggal di server

## Apa Itu Frontend

`Frontend` adalah bagian aplikasi yang berhubungan langsung dengan tampilan dan interaksi user.

Contohnya:

- halaman chat
- daftar pesan
- input untuk mengetik pesan
- tombol kirim
- indikator loading

Di project ini, contoh frontend ada di file seperti:

- `web/src/app/page.tsx`
- `web/src/app/chat/page.tsx`
- komponen client seperti `web/src/components/chat/ChatPlayground.tsx`

## Apa Itu Backend

`Backend` adalah bagian aplikasi yang menangani proses di balik layar.

Contohnya:

- menerima request dari frontend
- validasi data input
- memanggil provider AI
- menjaga API key tetap aman
- menyiapkan response untuk dikirim kembali ke frontend

Di Next.js App Router, backend sederhana sering dibuat lewat `Route Handler`.

Contohnya nanti:

- `web/src/app/api/chat/route.ts`

## Kenapa Ini Sering Membingungkan di Next.js

Di Next.js, frontend dan backend ada dalam satu project.

Karena itu, engineer pemula sering melihat semua file berada di satu folder besar lalu merasa semuanya sama.

Padahal tidak.

Walaupun satu project:

- ada file yang berjalan di browser
- ada file yang berjalan di server

Memahami batas ini sangat penting untuk chatbot.

## Server Component dan Client Component

Di Next.js App Router, `page` dan `layout` secara default adalah `Server Component`.

Artinya:

- file itu dirender di server
- file itu bisa menyiapkan data awal
- file itu tidak otomatis boleh memakai event handler atau `useState`

Kalau sebuah komponen butuh interaksi seperti:

- `onClick`
- `onChange`
- `useState`

maka komponen itu harus menjadi `Client Component` dengan `"use client"`.

## Cara Berpikir yang Aman

Pakai aturan sederhana ini:

- kalau fokusnya tampilan dan interaksi user, pikirkan frontend
- kalau fokusnya request, validasi, secret, atau integrasi provider, pikirkan backend

Untuk project chatbot:

- kotak input chat = frontend
- tombol kirim = frontend
- request ke provider AI = backend
- API key OpenAI = backend
- hasil balasan yang ditampilkan di layar = frontend

## Props Bukan API

Ini penting agar tidak tercampur.

- `props` dipakai untuk mengirim data antar komponen
- `API` dipakai untuk komunikasi antara frontend dan backend

Jadi alurnya bisa seperti ini:

1. backend mengirim data ke frontend lewat response
2. frontend menerima data itu
3. frontend meneruskan data ke komponen lewat `props`

## Contoh Alur Sederhana

Bayangkan user sedang memakai halaman chat:

1. user mengetik pesan di browser
2. frontend mengirim request ke `/api/chat`
3. backend menerima request itu
4. backend memproses pesan
5. backend mengirim response JSON
6. frontend menerima response
7. frontend menampilkan hasil ke komponen UI

Di situ terlihat:

- request dan response = urusan frontend ke backend
- tampilan bubble pesan = urusan frontend
- logic provider AI = urusan backend

## Contoh Dalam Project Ini

Pada latihan awal yang sudah dibuat:

- `web/src/app/chat/page.tsx` adalah halaman latihan
- `web/src/components/chat/ChatPlayground.tsx` adalah komponen client interaktif
- `web/src/app/api/chat/route.ts` adalah backend dummy

Jadi satu latihan kecil ini sengaja dibuat untuk memperlihatkan batas tanggung jawab tiap bagian.

## Ringkasan

Pahami inti materi ini seperti ini:

- `frontend` adalah area tampilan dan interaksi user
- `backend` adalah area proses di balik layar
- di Next.js keduanya bisa hidup dalam satu project
- `props` bukan API
- API dipakai antara frontend dan backend
- props dipakai antar komponen

## Langkah Setelah Ini

Setelah paham perbedaan frontend dan backend, materi berikutnya yang paling natural adalah:

- memahami `API route` atau `Route Handler`
- mempraktikkan alur request sederhana dari halaman chat ke backend dummy
