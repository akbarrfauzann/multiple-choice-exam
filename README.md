Aplikasi Ujian Pilihan Ganda

Sebuah aplikasi kuis interaktif yang memungkinkan pengguna mengikuti ujian pilihan ganda dengan batas waktu.

Fitur
Kuis dengan Waktu: Penghitung mundur untuk setiap kuis.
Pelacakan Skor: Melacak skor pengguna sepanjang kuis.
Indikator Kemajuan: Menunjukkan kemajuan pengguna dalam ujian.
Umpan Balik Langsung: Memberikan umpan balik segera apakah jawaban benar atau salah setelah dipilih.
Desain Responsif: Aplikasi terlihat baik di semua perangkat.
Tampilan Hasil Akhir: Menampilkan skor akhir dan rincian jawaban benar/salah di akhir ujian.
Teknologi yang Digunakan
React: Framework utama untuk membangun antarmuka pengguna.
Tailwind CSS: Untuk styling modern dan responsif.
React Icons: Memudahkan penambahan ikon di antarmuka.
Custom Hooks: useExam, useTimer untuk pengelolaan state dan pemakaian ulang logika.
Memulai
Prasyarat
Node.js (v14 atau lebih baru)
npm atau yarn
Langkah-langkah Instalasi
Clone repositori:

bash
Copy code
git clone https://github.com/akbarrfauzann/multiple-choice-exam.git
Masuk ke direktori proyek:

bash
Copy code
cd multiple-choice-exam
Instal dependensi:

bash
Copy code
npm install
Jalankan server pengembangan:

bash
Copy code
npm start
Aplikasi akan tersedia di: http://localhost:3000

Membangun untuk Produksi
Untuk membuat build yang dioptimalkan untuk produksi:

bash
Copy code
npm run build
Keputusan Desain
Custom Hooks: Menggunakan hooks (useExam, useTimer) untuk mengelola logika ujian dan fungsi timer guna menjaga kode tetap bersih dan mudah di-maintain.
Desain Responsif: Menggunakan Tailwind CSS untuk memastikan aplikasi dapat dilihat dengan baik di semua perangkat.
Komponen Reusable: Membangun komponen modular yang dapat digunakan kembali seperti Card, Header, dan ActionButtons agar aplikasi mudah dikembangkan dan dirawat.
Peningkatan UX: Menambahkan state loading dan error untuk menangani operasi asinkron dan meningkatkan pengalaman pengguna.
Umpan Balik Langsung: Pengguna langsung mendapatkan umpan balik atas jawaban mereka untuk membantu pembelajaran.
Demo Langsung
Kunjungi aplikasi yang sudah live di: "https://multiple-choice-exam-ebon.vercel.app/"

Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT.
