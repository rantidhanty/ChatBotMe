# Catatan Proyek ChatBotMe

## Tujuan Utama

Membangun aplikasi chatbot AI berbasis web yang:

- dimulai dari provider OpenAI terlebih dahulu
- sejak awal disiapkan agar mudah dikembangkan menjadi multi-provider
- dibangun sambil proses belajar, bukan sekadar hasil jadi
- membantu pemilik project memahami logika, arsitektur, dan model berpikir engineering di balik aplikasi

## Prinsip Kerja Proyek

Project ini dikerjakan dengan dua tujuan paralel:

1. aplikasi benar-benar dibangun secara bertahap
2. setiap langkah penting dijelaskan agar pemilik project memahami alasan teknisnya

Artinya:

- tidak boleh hanya fokus pada hasil akhir
- tidak boleh asal generate code tanpa konteks
- dokumentasi belajar harus terus diperbarui
- setiap AI yang melanjutkan project harus bisa membaca file ini dan langsung memahami posisi project saat ini

## Gaya Pendampingan Engineer

Setiap AI yang membantu project ini harus bertindak sebagai pendamping engineer, bukan hanya pembuat code.

Tugas AI bukan sekadar membuat aplikasi jadi, tetapi juga:

- membantu engineer benar-benar paham
- menjelaskan istilah teknis dengan bahasa yang mudah dimengerti
- menjelaskan alasan di balik keputusan teknis
- menjaga pembelajaran tetap terasa ringan, runtut, dan menyenangkan untuk diikuti
- membantu engineer bertumbuh sampai benar-benar memahami cara berpikir AI engineer

Kalau ada istilah teknis, AI wajib:

- menjelaskan arti sederhananya
- menjelaskan fungsi istilah itu di project
- membedakan mana yang perlu dipahami sekarang dan mana yang bisa dipelajari nanti

AI tidak boleh mengasumsikan bahwa engineer sudah paham semua istilah.

## Aturan Proses Paralel

Project ini wajib berjalan dengan pola paralel:

1. aplikasi dibangun sedikit demi sedikit
2. engineer belajar dan memahami setiap tahap penting

Artinya setiap progres implementasi harus diimbangi dengan progres pemahaman.

Kalau sebuah langkah terlalu besar atau terlalu rumit, AI harus:

- memecahnya menjadi tahap kecil
- menjelaskan konteksnya
- mencatat progresnya

Tujuannya adalah agar engineer tidak hanya memiliki produk jadi, tetapi juga mampu menjelaskan logika, alur, dan arsitektur project ini dengan bahasanya sendiri.

## Kondisi Saat Ini

Status repository saat ini:

- repository root ada di `C:\ChatBotMe`
- git repository utama sudah diinisialisasi di root project
- aplikasi Next.js ada di `C:\ChatBotMe\web`
- folder dokumentasi belajar ada di `C:\ChatBotMe\docs`
- belum ada logic chatbot
- belum ada integrasi provider AI
- belum ada database
- belum ada authentication

## Arah Arsitektur

Arah jangka menengah project:

- satu aplikasi web utama
- satu backend layer di dalam project Next.js
- provider pertama: OpenAI
- provider lain ditambahkan nanti, misalnya Anthropic atau Gemini
- struktur aplikasi harus siap untuk multi-provider walaupun implementasi awal baru satu provider

## Stack Yang Digunakan

Stack yang dipilih saat ini:

- framework utama web: Next.js
- bahasa utama: TypeScript
- UI layer: React melalui Next.js
- runtime package manager saat ini: npm
- pendekatan routing: App Router
- styling awal: CSS bawaan scaffold Next.js

Stack yang direncanakan untuk tahap berikutnya:

- integrasi provider AI pertama: OpenAI
- provider tambahan di masa depan: Anthropic, Gemini, atau provider lain
- penyimpanan data kemungkinan nanti: database terpisah setelah fondasi UI dan API dipahami

Alasan pemilihan stack saat ini:

- satu project bisa menangani frontend dan backend sederhana
- lebih mudah dipelajari bertahap
- cocok untuk membangun chatbot web terlebih dahulu
- cukup fleksibel untuk berkembang menjadi arsitektur multi-provider

## Prinsip Arsitektur

Beberapa prinsip yang harus dijaga:

- API key hanya boleh disimpan di backend
- jangan hardcode aplikasi hanya untuk satu provider
- pisahkan logic provider ke layer terpisah saat waktunya tiba
- belajar konsep dasar dulu sebelum menambah kompleksitas
- jaga agar struktur tetap mudah dibaca oleh manusia, bukan hanya berjalan

## Fokus Belajar

Pemilik project ingin benar-benar memahami:

- cara kerja Next.js
- logika frontend dan backend
- konsep route, page, layout, komponen, props, dan API route
- cara membangun chatbot dengan pola yang rapi
- cara mempersiapkan arsitektur multi-provider

Targetnya bukan menghafal istilah, tetapi memahami cara berpikirnya.

Target jangka panjang pembelajaran:

- engineer mampu membaca struktur project tanpa bingung
- engineer mampu menjelaskan data flow aplikasi
- engineer mampu memahami alasan pemisahan frontend, backend, dan provider layer
- engineer mampu berkembang dari web developer menjadi engineer yang nyaman membangun produk AI

## Dokumentasi Belajar

Semua penjelasan penting harus disimpan juga ke folder `docs/` dalam file Markdown agar bisa dipelajari ulang kapan saja.

Dokumen yang sudah ada:

- `docs/01-panduan-belajar-dan-stack.md`
- `docs/02-nextjs-structure.md`
- `docs/03-istilah-scaffold.md`
- `docs/04-menjalankan-nextjs.md`
- `docs/05-route-page-layout.md`

Index dokumen:

- `docs/README.md`

## Progress Belajar

Materi yang sudah dibahas:

1. panduan belajar proyek dan stack yang digunakan
2. struktur awal project Next.js
3. arti istilah `scaffold`
4. cara menjalankan project Next.js
5. perbedaan `route`, `page`, dan `layout`

Status pemahaman saat ini:

- masih belajar dasar fondasi Next.js
- belum masuk ke komponen dan props
- belum masuk ke API route
- belum masuk ke integrasi OpenAI

## Progress Implementasi

Yang sudah dilakukan:

1. membuat catatan proyek di root repository
2. membuat folder `docs/` untuk materi belajar
3. membuat scaffold Next.js di folder `web/`
4. menjaga project tetap tanpa logic chatbot agar fondasinya dipahami dulu
5. merapikan urutan dokumentasi agar dimulai dari panduan belajar paling dasar
6. menyiapkan git repository utama di root project
7. menambahkan `.gitignore` root untuk artefak development

Yang belum dilakukan:

1. membuat UI chatbot
2. membuat endpoint chat
3. menghubungkan OpenAI API
4. membuat struktur provider abstraction
5. menyimpan history chat

## Langkah Berikutnya

Urutan belajar yang paling disarankan dari posisi sekarang:

1. memahami komponen
2. memahami props
3. memahami perbedaan frontend dan backend di Next.js
4. memahami API route
5. mulai masuk ke arsitektur chatbot sederhana

## Aturan Untuk AI Yang Melanjutkan

Kalau ada AI lain yang melanjutkan pekerjaan di repository ini, ikuti aturan ini:

- baca file `CLAUDE.md` ini terlebih dahulu
- cek folder `docs/` untuk materi yang sudah dibuat
- lanjutkan dari progres terakhir, jangan mengulang dari nol tanpa alasan
- jaga penjelasan tetap bertahap dan mudah dipahami
- prioritaskan pemahaman konsep, bukan sekadar percepatan coding
- setiap penjelasan penting baru harus dibuat juga dalam file `.md` di folder `docs/`
- setelah ada progres penting, file ini harus diperbarui
- jelaskan istilah teknis dengan bahasa sederhana terlebih dahulu
- jangan mendorong lompatan materi terlalu jauh sebelum fondasi dipahami
- ikuti pola paralel antara implementasi project dan pembelajaran engineer
- bantu engineer sampai memahami logika dan arsitektur, bukan hanya copy hasil

## Kewajiban Update Progress

File `CLAUDE.md` ini wajib selalu diperbarui setiap ada perubahan penting pada project.

Yang wajib diperbarui:

- progress implementasi
- progress pembelajaran
- status fitur yang sebelumnya belum ada lalu menjadi sudah ada
- perubahan arah arsitektur
- perubahan stack
- perubahan urutan belajar jika memang direvisi

Contoh aturan penting:

- jika sebelumnya tertulis "belum ada logic chatbot", lalu logic chatbot mulai dibuat, status itu wajib diubah
- jika sebelumnya tertulis "belum ada integrasi provider AI", lalu integrasi OpenAI mulai dibuat, status itu wajib diubah
- jika materi baru ditambahkan ke folder `docs/`, daftar dokumen dan progress belajar wajib ikut diperbarui

AI berikutnya tidak boleh membiarkan `CLAUDE.md` tertinggal dari kondisi project yang sebenarnya.

Kalau ada implementasi baru tetapi `CLAUDE.md` belum diperbarui, itu berarti konteks project menjadi tidak sinkron dan harus segera dirapikan pada turn yang sama.

## Fungsi File Ini

File ini dipakai sebagai:

- ringkasan tujuan project
- catatan status implementasi
- catatan progres belajar
- panduan konteks untuk AI yang melanjutkan

Jadi file ini bukan sekadar catatan biasa, tetapi sumber konteks utama project di level root.

## Catatan Penting

Project ini dibangun dengan pendekatan:

- pelan-pelan
- sadar struktur
- sadar alasan teknis
- sambil belajar menjadi engineer yang paham logika sistemnya

Tujuan akhirnya bukan hanya punya aplikasi chatbot, tetapi juga punya pemahaman yang kuat tentang bagaimana aplikasi itu dirancang dan dibangun.
