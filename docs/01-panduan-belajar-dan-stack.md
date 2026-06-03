# 01 - Panduan Belajar Proyek dan Stack Yang Digunakan

## Tujuan

Dokumen ini menjelaskan bagaimana project ini harus dijalankan sambil belajar, dan stack teknis apa yang sedang digunakan.

Dokumen ini penting karena target project ini bukan hanya membuat aplikasi chatbot, tetapi juga membantu engineer benar-benar paham logika dan arsitekturnya.

## Cara Belajar di Project Ini

Project ini tidak dikerjakan dengan pola:

- suruh AI bikin semua
- aplikasi jadi
- engineer tidak paham apa yang terjadi

Project ini harus dikerjakan dengan pola:

1. membangun aplikasi secara bertahap
2. memahami alasan dari setiap langkah penting
3. menyimpan pembelajaran dalam dokumentasi

Artinya proses coding dan proses belajar harus berjalan paralel.

## Prinsip Pendampingan

AI yang membantu project ini harus:

- menjelaskan dengan bahasa yang mudah dimengerti
- membantu engineer memahami istilah teknis
- menjelaskan fungsi konsep dalam konteks project nyata
- memecah topik besar menjadi bagian kecil
- menjaga proses belajar tetap runtut dan tidak membingungkan

Kalau ada istilah teknis, pendekatan yang benar adalah:

1. jelaskan arti sederhananya
2. jelaskan kenapa istilah itu penting
3. jelaskan contoh pemakaiannya di project ini

Jadi targetnya bukan hafalan, tetapi pemahaman.

## Target Engineer

Target jangka panjang dari proses ini adalah:

- paham fondasi Next.js
- paham perbedaan frontend dan backend
- paham alur request dan response
- paham cara kerja integrasi provider AI
- paham cara menyiapkan arsitektur yang bisa berkembang

Dengan kata lain, project ini adalah jalur belajar untuk tumbuh dari web developer menjadi engineer yang nyaman membangun aplikasi AI.

## Stack Yang Digunakan Saat Ini

Stack aktif saat ini:

- `Next.js`
- `React`
- `TypeScript`
- `npm`
- `App Router`
- `CSS` bawaan scaffold

## Penjelasan Sederhana Stack

### Next.js

Framework utama project web ini.

Fungsinya:

- membuat aplikasi web
- menangani halaman
- menangani route
- nanti bisa juga menangani API route

### React

Library UI yang dipakai oleh Next.js.

Fungsinya:

- membangun tampilan aplikasi dari komponen-komponen kecil

### TypeScript

Versi JavaScript yang lebih ketat dan lebih aman untuk pengembangan project.

Fungsinya:

- membantu mengurangi kesalahan
- membuat struktur code lebih jelas

### npm

Tool untuk menjalankan script dan mengelola package project JavaScript.

Contohnya:

- `npm run dev`
- `npm run build`

### App Router

Sistem routing modern di Next.js yang memakai struktur folder.

Contohnya:

- `page.tsx`
- `layout.tsx`

## Stack Tahap Berikutnya

Stack yang direncanakan berikutnya, tetapi belum dipasang sekarang:

- OpenAI API sebagai provider pertama
- abstraction layer untuk provider AI
- database untuk menyimpan history chat

Hal ini sengaja belum dikerjakan karena fondasi Next.js masih sedang dipahami dulu.

## Kenapa Stack Ini Dipilih

Alasan utama pemilihan stack ini:

- frontend dan backend sederhana bisa ada dalam satu project
- cocok untuk chatbot web
- tidak terlalu berat untuk tahap belajar awal
- cukup fleksibel untuk berkembang ke multi-provider

## Aturan Untuk Progres Berikutnya

Setiap kali ada progres penting:

- dokumentasi di folder `docs/` harus diperbarui
- `CLAUDE.md` root harus diperbarui
- status belajar dan status implementasi harus tetap sinkron
- perubahan final harus di-commit dan di-push
- commit message harus mengikuti format `Conventional Commits`

## Standar Commit Yang Dipakai

Project ini memakai standar `Conventional Commits`.

Format umum:

- `<type>: <description>`
- `<type>(scope): <description>`

Contoh:

- `docs: update learning roadmap`
- `feat(chat): add message input ui`
- `fix(openai): handle missing api key`

Tipe yang umum dipakai:

- `feat`
- `fix`
- `docs`
- `refactor`
- `chore`
- `test`

Tujuannya agar history git lebih mudah dibaca, konsisten, dan enak dipelajari kembali.

## Kesimpulan

Project ini adalah kombinasi antara:

- pembangunan aplikasi chatbot
- pembelajaran engineering yang terstruktur

Karena itu, kecepatan bukan prioritas utama.

Prioritas utamanya adalah:

- paham
- runtut
- sadar alasan teknis
- siap berkembang ke level engineering yang lebih matang
