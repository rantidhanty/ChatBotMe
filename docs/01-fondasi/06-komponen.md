# 06 - Memahami Komponen di React dan Next.js

## Tujuan

Dokumen ini menjelaskan apa itu `komponen` di React dan Next.js.

Ini adalah salah satu konsep paling penting yang harus dipahami sebelum masuk ke UI chatbot.

## Gambaran Sederhana

Bayangkan sebuah halaman web seperti susunan blok.

Misalnya halaman chatbot punya:

- header
- area daftar pesan
- kotak input
- tombol kirim

Kalau semuanya ditulis dalam satu file besar, code akan cepat berantakan.

Karena itu kita memakai `komponen`.

## Apa Itu Komponen

`Komponen` adalah potongan UI yang dibuat sebagai unit terpisah agar bisa:

- dibaca lebih mudah
- dipakai ulang
- dirawat lebih mudah
- dipisahkan tanggung jawabnya

Cara berpikir sederhananya:

- halaman besar dipecah menjadi bagian-bagian kecil
- setiap bagian kecil itu bisa menjadi komponen

## Contoh Cara Melihat Komponen

Untuk chatbot, contoh komponen nanti bisa seperti:

- `ChatHeader`
- `MessageList`
- `MessageBubble`
- `ChatInput`
- `ModelSelector`

Artinya:

- satu layar tidak harus dibuat sebagai satu blok besar
- kita pecah menjadi bagian yang punya peran jelas

## Kenapa Komponen Penting

Komponen penting karena:

- code jadi lebih rapi
- lebih mudah mencari bagian tertentu
- lebih mudah diubah tanpa merusak seluruh halaman
- lebih mudah dipakai ulang di tempat lain

Kalau tidak memakai komponen, satu file UI bisa menjadi sangat panjang dan sulit dipahami.

## Komponen Bukan Halaman

Ini penting:

- `page.tsx` adalah halaman
- komponen adalah bagian-bagian di dalam halaman

Jadi:

- halaman adalah level besar
- komponen adalah bagian penyusunnya

Contoh sederhana:

- route `/chat`
- halaman `page.tsx`
- di dalamnya ada komponen `ChatHeader`, `MessageList`, dan `ChatInput`

## Komponen Adalah Fungsi

Di React modern, komponen biasanya ditulis sebagai function.

Artinya komponen adalah function yang mengembalikan tampilan UI.

Kamu belum perlu fokus ke sintaks dulu. Yang penting pahami logikanya:

- function dipakai untuk membentuk satu bagian tampilan
- hasilnya bisa ditaruh di halaman atau di komponen lain

## Cara Berpikir yang Benar

Saat melihat UI, biasakan bertanya:

- bagian ini bisa dipisah tidak
- bagian ini punya tugas khusus tidak
- bagian ini mungkin dipakai ulang tidak

Kalau jawabannya iya, biasanya itu kandidat komponen.

## Contoh Pemecahan UI

Misalnya ada halaman chat.

Daripada dibuat satu file besar, lebih sehat kalau dipisah seperti ini:

- `ChatPage`
- `ChatHeader`
- `ChatWindow`
- `MessageList`
- `MessageBubble`
- `ChatInput`

Masing-masing punya tugas lebih kecil dan lebih jelas.

## Keuntungan Untuk Belajar

Bagi engineer yang sedang belajar, komponen membantu karena:

- code lebih mudah dibaca sedikit demi sedikit
- lebih gampang memahami hubungan antar bagian UI
- tidak langsung tenggelam dalam satu file besar

Jadi komponen bukan hanya bagus untuk codebase, tapi juga bagus untuk proses belajar.

## Komponen dan Reusability

`Reusability` artinya sebuah bagian bisa dipakai lagi tanpa menulis ulang dari nol.

Contoh:

- satu komponen `Button`
- bisa dipakai di banyak tempat

Di chatbot nanti, komponen seperti `MessageBubble` sangat mungkin dipakai berulang untuk setiap pesan.

## Komponen dan Tanggung Jawab

Komponen yang sehat biasanya punya tanggung jawab yang cukup jelas.

Contoh:

- `ChatInput` fokus menangani area input
- `MessageList` fokus menampilkan daftar pesan

Jangan membuat satu komponen menangani terlalu banyak hal kalau bisa dipisah.

## Hubungan Dengan Materi Berikutnya

Setelah paham komponen, langkah berikutnya adalah `props`.

Kenapa?

Karena setelah UI dipecah jadi komponen, kita perlu paham bagaimana data dikirim dari satu bagian ke bagian lain.

Di situlah `props` mulai penting.

## Ringkasan

Pahami inti komponen seperti ini:

- komponen adalah potongan UI
- komponen membantu memecah halaman besar menjadi bagian kecil
- komponen membuat code lebih rapi, mudah dibaca, dan mudah dirawat
- komponen biasanya punya tugas yang cukup jelas
- komponen adalah fondasi penting sebelum belajar `props`
