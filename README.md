# ChatBotMe

ChatBotMe adalah project pembelajaran dan implementasi chatbot AI berbasis web.

Project ini dibangun dengan dua tujuan yang berjalan paralel:

- membuat aplikasi chatbot secara bertahap
- membantu engineer benar-benar memahami logika, arsitektur, dan proses pembangunannya

## Status Saat Ini

Saat ini project masih berada di tahap fondasi:

- aplikasi web Next.js sudah dibuat di folder `web/`
- dokumentasi belajar sudah dibuat di folder `docs/`
- integrasi OpenAI belum dimulai
- UI chatbot belum dibuat

## Struktur Repository

```txt
ChatBotMe/
  CLAUDE.md
  README.md
  docs/
  web/
```

Penjelasan singkat:

- `CLAUDE.md` adalah catatan konteks utama project
- `docs/` berisi materi belajar bertahap
- `web/` berisi aplikasi Next.js

## Stack Saat Ini

- Next.js
- React
- TypeScript
- npm
- App Router

## Arah Project

Target jangka menengah project:

- mulai dari OpenAI sebagai provider pertama
- menyiapkan struktur agar bisa berkembang ke multi-provider
- membangun chatbot web yang rapi dan mudah dipahami

## Cara Menjalankan Project

Masuk ke folder aplikasi web:

```powershell
cd C:\ChatBotMe\web
npm run dev
```

## Dokumentasi Belajar

Jalur fondasi saat ini:

1. `docs/01-fondasi/01-panduan-belajar-dan-stack.md`
2. `docs/01-fondasi/02-nextjs-structure.md`
3. `docs/01-fondasi/03-istilah-scaffold.md`
4. `docs/01-fondasi/04-menjalankan-nextjs.md`
5. `docs/01-fondasi/05-route-page-layout.md`
6. `docs/01-fondasi/06-komponen.md`

Jalur standar workflow:

1. `docs/02-standar-workflow/01-conventional-commits.md`

Index dokumentasi:

- `docs/README.md`

## Catatan

Project ini sengaja dibangun pelan-pelan agar engineer tidak hanya punya aplikasi jadi, tetapi juga paham alasan teknis di balik setiap keputusan.
