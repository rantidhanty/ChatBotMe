# 01 - Memahami Conventional Commits

## Tujuan

Dokumen ini menjelaskan `Conventional Commits` sebagai bagian dari standar workflow project.

## Sumber Belajar

Materi ini disusun berdasarkan spesifikasi resmi `Conventional Commits 1.0.0`.

## Apa Itu Conventional Commits

`Conventional Commits` adalah standar pesan commit yang membuat riwayat perubahan lebih eksplisit dan lebih mudah dipakai oleh manusia maupun tools.

## Bentuk Dasar Commit

```txt
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Type Paling Penting

- `feat` untuk fitur baru
- `fix` untuk perbaikan bug

## Scope

`Scope` bersifat opsional dan dipakai untuk menjelaskan area perubahan.

Contoh:

- `feat(chat): add model selector`
- `fix(api): handle empty prompt`

## Breaking Change

Breaking change bisa ditandai dengan `!` setelah type atau scope, atau dengan `BREAKING CHANGE:` pada body/footer.

## Type Tambahan Yang Dipakai Project Ini

- `docs`
- `refactor`
- `chore`
- `test`

## Kenapa Ini Penting

Project ini dibangun sambil belajar, jadi history commit harus mudah dibaca kembali dan mudah dipahami engineer.
