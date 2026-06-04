# 02 - Evaluasi Pemahaman Props, Frontend, Backend, dan API

## Tujuan

Dokumen ini mencatat koreksi dan perapian pemahaman tentang hubungan antara `props`, `frontend`, `backend`, dan `API`.

Tujuannya:

- menandai bagian yang sudah benar
- meluruskan bagian yang masih tercampur
- menyimpan versi penjelasan yang lebih rapi untuk dipelajari ulang

## Kalimat Awal Dari Engineer

Berikut inti pemahaman yang disampaikan:

- `props` itu aliran data yang dikirim ke komponen
- `props` ranahnya frontend saja
- berarti logika berjalan di frontend saja
- kalau backend ditampilkan ke frontend, berarti menggunakan API, bukan props
- bisa dikatakan props adalah API dari backend

## Penilaian Singkat

Secara umum, pemahaman ini **sudah punya arah yang bagus**, terutama karena kamu sudah mulai membedakan:

- data antar komponen
- data dari backend ke frontend

Tetapi ada beberapa bagian yang masih tercampur:

- `props` bukan berarti semua logic ada di frontend
- `props` bukan API
- data dari backend bisa masuk ke frontend lewat API, lalu setelah itu data tersebut bisa diteruskan lagi ke komponen lewat `props`

## Koreksi Per Konsep

### 1. Props

Yang kamu tulis:

- `props` itu aliran data yang dikirim ke komponen

Penilaian:

- **benar, dengan sedikit perapian**

Perbaikan saya:

- `props` adalah data yang dikirim dari satu komponen ke komponen lain, biasanya dari parent ke child

Kenapa saya rapikan:

- kata "aliran data" tidak salah
- tetapi lebih tepat kalau dimulai dari definisi dasarnya dulu: `props` adalah data masuk untuk komponen

## 2. Apakah Props Hanya Ranah Frontend

Yang kamu tulis:

- `props` ranahnya frontend saja

Penilaian:

- **hampir benar untuk cara belajar sekarang**

Perbaikan saya:

- untuk tahap belajar sekarang, kamu boleh menganggap `props` sebagai konsep yang dipakai di layer UI atau frontend

Catatan penting:

- `props` dipakai saat satu komponen memberi data ke komponen lain
- jadi fokus utamanya memang di area tampilan dan susunan komponen

Supaya tidak bingung dulu, cara berpikir sederhananya:

- `props` = cara data masuk ke komponen UI

## 3. Apakah Berarti Semua Logika Berjalan di Frontend

Yang kamu tulis:

- berarti logika berjalan di frontend saja

Penilaian:

- **ini perlu dikoreksi**

Perbaikan saya:

- tidak, adanya `props` tidak berarti semua logika berjalan di frontend

Kenapa:

- frontend punya logic sendiri, misalnya menampilkan daftar pesan, membaca input user, atau mengatur tampilan loading
- backend juga punya logic sendiri, misalnya menerima request, validasi input, memanggil provider AI, dan menjaga API key tetap aman

Jadi:

- `props` hanya salah satu cara mengirim data di layer komponen
- `props` tidak menentukan seluruh lokasi logic aplikasi

## 4. Kalau Backend Menampilkan Data ke Frontend, Apakah Pakai API Bukan Props

Yang kamu tulis:

- kalau backend ditampilkan ke frontend berarti menggunakan API, bukan props

Penilaian:

- **arahnya benar, tetapi perlu dibuat lebih presisi**

Perbaikan saya:

- data dari backend ke frontend biasanya masuk lewat API atau mekanisme request data
- setelah data itu sudah ada di frontend, data tersebut bisa diteruskan lagi ke komponen-komponen lewat `props`

Cara berpikir yang lebih tepat:

1. frontend meminta data ke backend
2. backend mengirim response
3. frontend menerima data itu
4. frontend membagikan data itu ke komponen lewat `props`

Jadi:

- antara backend dan frontend: biasanya pakai API atau request
- di dalam susunan komponen frontend: bisa pakai `props`

## 5. Apakah Props Bisa Disebut API Dari Backend

Yang kamu tulis:

- props bisa dikatakan API dari backend

Penilaian:

- **ini tidak tepat**

Perbaikan saya:

- `props` bukan API dari backend

Kenapa:

- `API` adalah jalur komunikasi antara sistem yang berbeda lapisan atau layanan
- `props` adalah mekanisme pengiriman data antar komponen

Perbedaannya sangat penting:

- `API` menghubungkan frontend ke backend
- `props` menghubungkan komponen ke komponen

Jadi jangan disamakan.

## Versi Penjelasan Yang Sudah Dirapikan

Kalau ditulis ulang dengan versi yang lebih tepat, hasilnya bisa seperti ini:

- `props` adalah data yang dikirim dari parent component ke child component
- `props` terutama dipahami sebagai konsep di area UI atau frontend
- keberadaan `props` tidak berarti semua logic aplikasi berjalan di frontend
- data dari backend ke frontend biasanya masuk lewat API atau request data
- setelah data sampai di frontend, data itu bisa diteruskan ke komponen lewat `props`
- `props` bukan API, karena keduanya punya fungsi yang berbeda

## Apa Yang Kamu Tulis dan Apa Perbaikannya

### Props

Tulisan kamu:

- `props` itu aliran data yang dikirim ke komponen

Perbaikan saya:

- `props` adalah data yang dikirim ke komponen, biasanya dari parent ke child

### Ranah Props

Tulisan kamu:

- `props` ranahnya frontend aja

Perbaikan saya:

- untuk tahap sekarang, anggap saja `props` adalah cara data masuk ke komponen UI di frontend

### Lokasi Logic

Tulisan kamu:

- berarti logika berjalan di frontend aja

Perbaikan saya:

- tidak, logic bisa ada di frontend dan backend; `props` hanya membahas pengiriman data antar komponen

### Backend ke Frontend

Tulisan kamu:

- kalau backend ditampilkan ke frontend berarti menggunakan API bukan props

Perbaikan saya:

- data dari backend ke frontend biasanya masuk lewat API, lalu setelah itu bisa diteruskan ke komponen frontend lewat `props`

### Props dan API

Tulisan kamu:

- props bisa dikatakan API dari backend

Perbaikan saya:

- tidak, `props` bukan API; `props` dipakai antar komponen, sedangkan API dipakai untuk komunikasi frontend dengan backend

## Contoh Sederhana Dalam Chatbot

Supaya lebih terasa, bayangkan alurnya seperti ini:

1. user mengetik pesan di halaman chat
2. frontend mengirim request ke `/api/chat`
3. backend menerima request itu
4. backend memproses dan mengembalikan balasan
5. frontend menerima hasil balasan
6. frontend meneruskan data pesan itu ke komponen seperti `MessageList` atau `MessageBubble` lewat `props`

Di situ terlihat jelas:

- request ke backend memakai API
- pengiriman data ke komponen memakai `props`

## Kesimpulan Penilaian

Nilai pemahamanmu untuk tahap ini: **bagus, karena kamu sudah mulai membedakan dua jenis aliran data**.

Yang sudah kuat:

- kamu sudah sadar bahwa data dari backend ke frontend tidak sama dengan data antar komponen

Yang perlu dijaga:

- jangan menyamakan `props` dengan API
- jangan menganggap adanya `props` berarti semua logic aplikasi ada di frontend

## Fokus Belajar Berikutnya

Setelah ini, materi yang paling cocok adalah:

- perbedaan `frontend` dan `backend` di Next.js
- cara kerja `API route`

Karena setelah dua hal itu dipahami, alur chatbot akan jauh lebih mudah dibayangkan.
