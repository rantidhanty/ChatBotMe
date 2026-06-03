# 07 - Memahami Props di React dan Next.js

## Tujuan

Dokumen ini menjelaskan apa itu `props` di React dan Next.js.

Kalau komponen adalah potongan UI, maka `props` adalah salah satu cara utama untuk mengirim data ke komponen itu.

## Gambaran Sederhana

Bayangkan komponen seperti sebuah alat.

Agar alat itu bekerja sesuai kebutuhan, kita perlu memberi input.

Di React, input itu sering dikirim lewat `props`.

Cara berpikir sederhananya:

- komponen menerima data
- data itu memengaruhi isi atau perilaku komponen

## Apa Itu Props

`Props` adalah data yang dikirim dari komponen induk ke komponen anak.

Jadi kalau ada satu komponen memanggil komponen lain, komponen pertama bisa mengirim data ke komponen kedua.

## Contoh Cara Berpikir

Misalnya kamu punya komponen:

- `MessageBubble`

Lalu setiap bubble pesan perlu tahu:

- isi pesan
- siapa pengirimnya

Berarti data seperti `text` dan `role` bisa dikirim ke komponen itu lewat `props`.

## Kenapa Props Penting

Props penting karena:

- membuat komponen bisa menerima data dari luar
- membuat komponen lebih fleksibel
- membuat komponen yang sama bisa dipakai untuk data yang berbeda

Tanpa props, komponen akan cenderung kaku dan sulit dipakai ulang.

## Hubungan Props dan Komponen

Komponen dan props selalu sangat dekat hubungannya.

Cara berpikirnya:

- komponen adalah bentuk UI
- props adalah data yang diberikan ke bentuk UI itu

Jadi:

- komponen tanpa props bisa tetap ada
- tetapi banyak komponen menjadi jauh lebih berguna karena props

## Contoh Dalam Chatbot

Misalnya ada komponen `MessageBubble`.

Komponen ini bisa dipakai berkali-kali untuk banyak pesan.

Yang membedakan tiap bubble bukan bentuk dasarnya, tetapi data yang masuk.

Contohnya:

- bubble pertama menerima pesan user
- bubble kedua menerima pesan AI

Jadi satu komponen bisa dipakai berulang dengan props yang berbeda.

## Props Membuat Reusability Lebih Kuat

Di materi komponen kamu sudah belajar tentang `reusability`.

Props membuat `reusability` itu jauh lebih berguna.

Kenapa?

Karena:

- satu komponen bisa dipakai di banyak tempat
- setiap pemakaian bisa diberi data berbeda

Artinya kita tidak perlu membuat komponen baru untuk setiap variasi kecil.

## Arah Aliran Props

Ini penting dipahami:

Props biasanya mengalir dari atas ke bawah.

Artinya:

- parent component mengirim data
- child component menerima data

Jadi props membantu kita memahami aliran data UI secara lebih teratur.

## Parent dan Child

Istilah yang sering muncul:

- `parent component`
- `child component`

Artinya:

- parent = komponen yang memanggil komponen lain
- child = komponen yang dipanggil

Kalau parent mengirim data ke child, data itu biasanya dikirim lewat props.

## Props Bukan Tempat Menyimpan Semua Hal

Props dipakai untuk menerima data dari luar komponen.

Jadi props bukan konsep untuk "menyimpan semua data aplikasi".

Untuk sekarang cukup pahami dulu:

- props = data masuk ke komponen

Nanti setelah ini kamu akan belajar konsep lain seperti state atau data flow yang lebih luas.

## Cara Berpikir yang Benar

Saat melihat sebuah komponen, tanyakan:

- komponen ini perlu menerima data dari luar tidak
- apa yang berubah dari satu pemakaian ke pemakaian lain
- apakah data itu lebih cocok dikirim dari parent

Kalau jawabannya iya, biasanya props diperlukan.

## Contoh Di Halaman Chat

Misalnya nanti ada susunan seperti ini:

- `ChatPage`
- `MessageList`
- `MessageBubble`

Kemungkinan alurnya:

- `ChatPage` punya data pesan
- `ChatPage` mengirim data ke `MessageList`
- `MessageList` meneruskan data tertentu ke `MessageBubble`

Jadi props membantu data bergerak dari struktur yang lebih besar ke bagian UI yang lebih kecil.

## Kenapa Ini Penting Untuk Engineer

Kalau kamu paham props, kamu mulai paham hal yang sangat penting dalam frontend:

- UI bukan hanya tampilan
- UI juga soal bagaimana data mengalir

Ini adalah salah satu fondasi supaya nanti kamu tidak bingung saat aplikasi mulai punya banyak komponen.

## Ringkasan

Pahami inti props seperti ini:

- props adalah data yang dikirim ke komponen
- props biasanya mengalir dari parent ke child
- props membuat komponen lebih fleksibel dan bisa dipakai ulang
- props sangat penting untuk membangun UI yang rapi dan terstruktur
- props adalah langkah berikut yang natural setelah memahami komponen
