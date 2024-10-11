# Aplikasi Ujian Pilihan Ganda

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub package.json version](https://img.shields.io/github/package-json/v/akbarrfauzann/multiple-choice-exam)

Sebuah aplikasi kuis interaktif yang memungkinkan pengguna mengikuti ujian pilihan ganda dengan batas waktu.

## 🎯 Fitur Utama
- ⏳ **Kuis dengan Waktu**: Penghitung mundur untuk setiap kuis.
- 📊 **Pelacakan Skor**: Melacak skor pengguna sepanjang kuis.
- 🚀 **Indikator Kemajuan**: Menunjukkan kemajuan pengguna dalam ujian.
- 🧠 **Umpan Balik Langsung**: Memberikan umpan balik segera apakah jawaban benar atau salah setelah dipilih.
- 📱 **Desain Responsif**: Aplikasi terlihat baik di semua perangkat.
- 🏅 **Tampilan Hasil Akhir**: Menampilkan skor akhir dan rincian jawaban benar/salah di akhir ujian.

## 📸 Screenshot
![image](https://github.com/user-attachments/assets/e70dddbc-a43a-425b-80b0-729f2704710e)


## 🛠️ Teknologi yang Digunakan
- **React**: Framework utama untuk membangun antarmuka pengguna.
- **Tailwind CSS**: Untuk styling modern dan responsif.
- **React Icons**: Memudahkan penambahan ikon di antarmuka.
- **Custom Hooks**: `useExam`, `useTimer` untuk pengelolaan state dan pemakaian ulang logika.

## 🚀 Memulai

### Prasyarat
- **Node.js** (v14 atau lebih baru)
- **npm** atau **yarn**

### Langkah-langkah Instalasi

1. Clone repositori:
    ```bash
    git clone https://github.com/akbarrfauzann/multiple-choice-exam.git
    ```

2. Masuk ke direktori proyek:
    ```bash
    cd multiple-choice-exam
    ```

3. Instal dependensi:
    ```bash
    npm install
    ```

4. Jalankan server pengembangan:
    ```bash
    npm start
    ```

Kunjungi aplikasi yang sudah live di: https://multiple-choice-exam-ebon.vercel.app/


### Membangun untuk Produksi

Untuk membuat build yang dioptimalkan untuk produksi:
```bash
npm run build
