# 🍔 PorsiKita

<div align="center">

# 🍽️ PorsiKita - Food Order Web App

### _Modern Food Ordering System using MERN Stack_

<img src="https://img.shields.io/badge/React-19-blue?logo=react">
<img src="https://img.shields.io/badge/NodeJS-Express-green?logo=node.js">
<img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb">
<img src="https://img.shields.io/badge/Vite-Frontend-purple?logo=vite">
<img src="https://img.shields.io/badge/License-MIT-orange">

</div>

---

# 📖 Tentang Project

Selamat datang di **PorsiKita** 👋

PorsiKita merupakan aplikasi **Food Order Website** yang dibuat menggunakan teknologi **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

Project ini dibuat sebagai simulasi sistem pemesanan makanan modern yang memiliki fitur seperti pencarian menu, keranjang belanja, checkout, pengurangan stok otomatis, hingga laporan pendapatan menggunakan **MongoDB Aggregation Pipeline**.

Berbeda dengan aplikasi sederhana lainnya, project ini sudah menggunakan konsep **Decoupled Architecture**, yaitu memisahkan **Frontend** dan **Backend** agar kode menjadi lebih rapi, modular, mudah dikembangkan, dan mengikuti standar industri.

---

# 🎯 Tujuan Project

Project ini dibuat untuk mempelajari implementasi teknologi Fullstack JavaScript, khususnya:

- ⚛️ React.js sebagai Frontend
- 🚀 Express.js sebagai Backend
- 🍃 MongoDB sebagai Database NoSQL
- 🔗 REST API sebagai komunikasi Frontend dan Backend
- 📊 MongoDB Aggregation Pipeline
- 🔒 Atomic Update MongoDB (`$inc`, `$gte`)
- 🧩 Mongoose Schema & Referencing
- 🎨 UI Modern dengan Dark Mode

---

# ✨ Fitur Utama

## 🍽️ Manajemen Restoran

- 📋 Menampilkan daftar restoran
- 🍜 Menampilkan daftar menu
- 💰 Menampilkan harga
- 📦 Menampilkan stok
- 🖼️ Menampilkan gambar makanan

---

## 🔍 Pencarian Pintar

Cari restoran maupun makanan secara cepat.

Menggunakan:

- MongoDB Text Index
- Text Search Query

Sehingga pencarian dilakukan langsung oleh database, bukan hanya filter biasa di React.

---

## 🛒 Keranjang Belanja

User dapat

- ➕ Menambah menu
- ➖ Mengurangi jumlah menu
- ❌ Menghapus menu
- 💰 Menghitung total harga otomatis

---

## ✅ Checkout

Saat tombol Checkout ditekan sistem akan

- Memvalidasi stok
- Mengurangi stok
- Menyimpan pesanan
- Menghitung total pembayaran
- Menampilkan popup sukses

---

## 🛡️ Anti Stok Minus

Sistem menggunakan Atomic Update MongoDB.

Operator yang digunakan

- `$gte`
- `$inc`

Keuntungan:

✅ Tidak terjadi stok minus

✅ Aman ketika banyak user melakukan checkout bersamaan

✅ Mencegah Race Condition

---

## 📊 Revenue

Admin dapat melihat total pendapatan.

Revenue dihitung menggunakan

- `$match`
- `$group`
- `$sum`

Semuanya diproses langsung oleh MongoDB Aggregation Pipeline.

---

## 👨‍💼 Kontrol Admin

Admin dapat

- Mengubah status pesanan
- Melihat riwayat transaksi
- Mengelola proses pesanan

---

## 🌙 Dark Mode

Website menyediakan

- ☀️ Light Mode
- 🌙 Dark Mode

Agar nyaman digunakan kapan saja.

---

## 🔔 SweetAlert2

Semua notifikasi menggunakan SweetAlert2.

Contoh:

- Checkout berhasil
- Checkout gagal
- Update status berhasil
- Error stok habis

---

# 🛠️ Teknologi yang Digunakan

## 🎨 Frontend

| Teknologi        | Fungsi           |
| ---------------- | ---------------- |
| React.js         | Library Frontend |
| Vite             | Build Tool       |
| React Router DOM | Navigasi Halaman |
| Axios            | HTTP Client      |
| SweetAlert2      | Popup Modern     |
| CSS3             | Styling          |

---

## 🚀 Backend

| Teknologi  | Fungsi                 |
| ---------- | ---------------------- |
| Node.js    | Runtime JavaScript     |
| Express.js | REST API               |
| MongoDB    | Database               |
| Mongoose   | ODM MongoDB            |
| CORS       | Menghubungkan Frontend |
| Dotenv     | Konfigurasi            |

---

# 🧱 Arsitektur Sistem

Project ini menggunakan konsep **Decoupled Architecture**.

Artinya Frontend dan Backend dipisahkan menjadi dua aplikasi berbeda.

```text
                👤 USER
                   │
                   ▼
        🌐 React Frontend
                   │
              Axios Request
                   │
                   ▼
        🚀 Express Backend
                   │
             Mongoose ODM
                   │
                   ▼
          🍃 MongoDB Database
```

### Keuntungan

✅ Mudah dikembangkan

✅ Mudah diperbaiki

✅ Kode lebih rapi

✅ Standar industri

---

# ⚙️ Persiapan Sebelum Menjalankan

Pastikan software berikut sudah terinstall.

| Software                    | Status |
| --------------------------- | ------ |
| ✅ Node.js                  |
| ✅ MongoDB Community Server |
| ✅ MongoDB Compass          |
| ✅ Visual Studio Code       |
| ✅ Git (Opsional)           |

---

# 📦 Install Dependencies

Project terdiri dari dua bagian.

- Backend
- Frontend

Keduanya memiliki package masing-masing.

---

## 🚀 Install Backend

Masuk ke folder backend

```bash
cd backend
```

Install package

```bash
npm install
```

Package yang akan terinstall

| Package  | Fungsi                 |
| -------- | ---------------------- |
| express  | REST API               |
| mongoose | MongoDB                |
| cors     | Menghubungkan Frontend |
| dotenv   | Membaca file .env      |
| nodemon  | Auto Restart           |

---

## ⚛️ Install Frontend

Masuk ke folder frontend

```bash
cd frontend
```

Install package

```bash
npm install
```

Package yang digunakan

| Package          | Fungsi       |
| ---------------- | ------------ |
| react-router-dom | Routing      |
| axios            | HTTP Request |
| sweetalert2      | Popup        |

---

# 🎉 Selamat!

Jika semua langkah di atas sudah selesai, berarti project sudah siap dijalankan.

➡️ **Lanjut ke Part 2** nanti kita akan membahas:

- 📂 Struktur Folder
- 🗂️ Penjelasan Setiap File
- 🧠 Backend
- 🎨 Frontend
- 📖 Cara Membaca Project
- 🔥 File yang Paling Penting

---

# 📂 Struktur Project

Berikut adalah struktur folder utama pada project **PorsiKita**.

```text
PorsiKita/
│
├── 📂 backend/
│   ├── 📂 controllers/
│   │      └── 🧠 orderController.js
│   │
│   ├── 📂 middleware/
│   │
│   ├── 📂 models/
│   │      ├── 🍽️ Restaurant.js
│   │      └── 🧾 Order.js
│   │
│   ├── 📂 routes/
│   │      └── 🌐 api.js
│   │
│   ├── 🔐 .env
│   ├── 🚀 index.js
│   ├── package.json
│   └── package-lock.json
│
├── 📂 frontend/
│   │
│   ├── package.json
│   │
│   └── 📂 src/
│        │
│        ├── 📂 components/
│        │
│        ├── 📂 pages/
│        │      ├── 🏠 Home.jsx
│        │      ├── 🍽️ RestaurantDetail.jsx
│        │      └── 📜 OrderHistory.jsx
│        │
│        ├── ⚛️ App.jsx
│        └── 🎨 index.css
│
└── 📄 README.md
```

---

# 🖥️ Mengenal Backend

Backend merupakan **otak utama aplikasi**.

Semua proses penting seperti **mengambil data**, **menyimpan pesanan**, **mengurangi stok**, hingga **menghitung pendapatan** dilakukan di sini.

```text
Backend
│
├── Database
├── Business Logic
├── REST API
└── Validasi Data
```

---

# 📁 Folder Backend

```text
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
└── index.js
```

---

# 🔐 `.env`

📌 **Fungsi**

File ini digunakan untuk menyimpan konfigurasi aplikasi.

Contohnya

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/food_order_db
```

### Kenapa memakai `.env`?

Karena informasi seperti alamat database tidak disimpan langsung di dalam source code.

Keuntungannya

- 🔒 Lebih aman
- 🔄 Mudah dipindahkan
- ⚙️ Mudah mengubah konfigurasi

> **⚠️ Jangan pernah meng-upload file `.env` ke GitHub.**

---

# 🚀 `index.js`

File pertama yang dijalankan saat backend dinyalakan.

```bash
node index.js
```

Tugasnya

- ✅ Menjalankan Express Server
- 🔗 Menghubungkan MongoDB
- 🌐 Mengaktifkan API
- 🛡️ Mengaktifkan Middleware
- ⚙️ Menjalankan seluruh aplikasi Backend

Tanpa file ini backend tidak akan hidup.

---

# 🧠 Folder `controllers`

Inilah **otak sebenarnya** dari aplikasi.

Semua logika bisnis berada di sini.

```text
controllers/
│
└── orderController.js
```

## Yang dikerjakan Controller

✅ Mengambil data restoran

✅ Checkout pesanan

✅ Mengurangi stok

✅ Menghitung total harga

✅ Menyimpan pesanan

✅ Mengubah status pesanan

✅ Menghitung Revenue

---

# ⭐ File Paling Penting

```text
controllers/
└── orderController.js
```

Kalau dosen bertanya

> "Logika aplikasi ada di mana?"

Jawabannya adalah

> **Semua Business Logic berada di dalam `orderController.js`.**

File ini menggunakan beberapa operator MongoDB seperti

- `$inc`
- `$gte`
- `$match`
- `$group`
- `$sum`

---

# 🗄️ Folder `models`

Folder ini berisi struktur database MongoDB.

```text
models/
│
├── Restaurant.js
└── Order.js
```

---

## 🍽️ Restaurant.js

Mengatur struktur data restoran.

Contohnya

- Nama Restoran
- Menu
- Harga
- Gambar
- Stok

---

## 🧾 Order.js

Mengatur struktur data pesanan.

Contohnya

- Nama Pembeli
- Daftar Menu
- Total Harga
- Status
- Waktu Pemesanan

---

## Kapan membuka folder Models?

Jika ingin

- ➕ Menambah kolom baru
- 🔄 Mengubah tipe data
- 📦 Mengubah struktur database

---

# 🌐 Folder `routes`

Folder ini bertugas menghubungkan Frontend dengan Controller.

```text
Frontend
      │
      ▼
routes/api.js
      │
      ▼
Controller
      │
      ▼
MongoDB
```

Contoh Endpoint

```http
GET    /api/restaurants

POST   /api/orders

PUT    /api/orders/:id

GET    /api/stats/revenue
```

> 📌 **Routes hanya mengatur jalur API, bukan tempat logika aplikasi.**

---

# 🛡️ Folder `middleware`

Middleware adalah "penjaga gerbang" sebelum request masuk ke Controller.

Contoh penggunaan

- Login
- Validasi
- Authentication
- Logging

Pada project ini middleware masih sederhana, tetapi folder ini sudah disiapkan agar project mudah dikembangkan di masa depan.

---

# 🎨 Mengenal Frontend

Frontend merupakan bagian yang dilihat langsung oleh pengguna.

Semua tampilan website berada di sini.

```text
Frontend
│
├── Halaman
├── Tombol
├── Navbar
├── Dark Mode
├── Keranjang
└── CSS
```

---

# 📁 Struktur Frontend

```text
frontend/
│
└── src/
     │
     ├── components/
     ├── pages/
     ├── App.jsx
     └── index.css
```

---

# ⚛️ App.jsx

Merupakan file utama React.

Berfungsi untuk

- 🧭 Routing Halaman
- 🌙 Dark Mode
- 🏠 Layout
- 📄 Navbar

Jika ingin menambah halaman baru biasanya dimulai dari file ini.

---

# 🎨 index.css

File ini mengatur seluruh tampilan website.

Contohnya

- Warna
- Font
- Layout
- Responsive
- Dark Mode
- Animasi

Jika ingin mengubah tampilan website, biasanya file pertama yang dibuka adalah **index.css**.

---

# 📂 Folder `pages`

Semua halaman website berada di sini.

```text
pages/
│
├── Home.jsx
├── RestaurantDetail.jsx
└── OrderHistory.jsx
```

---

## 🏠 Home.jsx

Halaman pertama saat website dibuka.

Berisi

- Banner
- Daftar Restoran
- Search
- Card Restoran

---

## 🍽️ RestaurantDetail.jsx

Halaman detail restoran.

Merupakan halaman yang paling sering digunakan oleh user.

Berisi

- Keranjang
- Checkout
- Total Harga
- Jumlah Menu
- SweetAlert

---

## 📜 OrderHistory.jsx

Halaman Riwayat Pesanan.

Berisi

- Daftar Transaksi
- Status Pesanan
- Tombol Admin
- Revenue

---

# 🧩 Folder `components`

Folder ini berisi komponen React yang digunakan berulang.

Misalnya

- Navbar
- Button
- Card
- Footer

Keuntungannya

- 📦 Kode lebih rapi
- 🔄 Bisa dipakai berkali-kali
- 🛠️ Mudah dirawat

---

# 🗺️ Mau Mengubah Apa?

Gunakan tabel berikut sebagai panduan.

| Yang Ingin Diubah     | Lokasi File                               |
| --------------------- | ----------------------------------------- |
| 🎨 Warna Website      | `frontend/src/index.css`                  |
| 🏠 Halaman Beranda    | `frontend/src/pages/Home.jsx`             |
| 🍽️ Detail Restoran    | `frontend/src/pages/RestaurantDetail.jsx` |
| 📜 Riwayat Pesanan    | `frontend/src/pages/OrderHistory.jsx`     |
| 🧩 Komponen React     | `frontend/src/components/`                |
| 🧠 Logika Program     | `backend/controllers/`                    |
| 🗄️ Struktur Database  | `backend/models/`                         |
| 🌐 REST API           | `backend/routes/`                         |
| ⚙️ Konfigurasi Server | `backend/.env`                            |

---

# 🚫 File yang Sebaiknya Jangan Diubah

Beberapa file dibuat otomatis oleh Node.js maupun Vite.

```text
node_modules/

package-lock.json

vite.config.js

.gitignore
```

File tersebut biasanya **tidak perlu diedit**, kecuali benar-benar memahami fungsinya.

---

# 💡 Tips Developer

✅ Mau mengubah tampilan?

➡️ Buka `frontend/src/`

---

✅ Mau mengubah warna?

➡️ Buka `index.css`

---

✅ Mau menambah halaman?

➡️ Buka `pages`

---

✅ Mau membuat REST API baru?

➡️ Buka `backend/routes`

---

✅ Mau mengubah database?

➡️ Buka `backend/models`

---

✅ Mau mengubah logika aplikasi?

➡️ Buka `backend/controllers`

---

# 📌 Ringkasan Singkat

```text
🎨 Tampilan Website
        │
        ▼
frontend/src/

🧠 Logika Program
        │
        ▼
backend/controllers/

🗄️ Database
        │
        ▼
backend/models/

🌐 REST API
        │
        ▼
backend/routes/

⚙️ Konfigurasi
        │
        ▼
backend/.env

🚀 Menjalankan Backend
        │
        ▼
backend/index.js
```

---

## 🎉 Sampai di sini...

Sekarang kamu sudah memahami **struktur project**, **fungsi setiap folder**, serta **file mana yang harus dibuka** ketika ingin mengembangkan aplikasi.

➡️ **Part 3** akan membahas cara menjalankan aplikasi dari nol, konfigurasi MongoDB, alur kerja Frontend ↔ Backend ↔ Database, penjelasan API, dan diagram proses checkout secara lengkap.

---

# 🚀 Menjalankan Project

Selamat! 🎉

Jika semua **Dependencies** sudah berhasil di-install, sekarang saatnya menjalankan aplikasi.

> ⚠️ **Penting:** Project ini terdiri dari **2 aplikasi** yang harus berjalan **secara bersamaan**.
>
> - 🎨 Frontend (React)
> - 🚀 Backend (Node.js)

Jika salah satunya tidak berjalan, maka website tidak akan bekerja dengan sempurna.

---

# 🖥️ Arsitektur Project

```text
                 👤 USER
                    │
                    ▼
        🌐 Frontend (React + Vite)
                    │
              Axios (HTTP Request)
                    │
                    ▼
        🚀 Backend (Express.js)
                    │
             Mongoose ODM
                    │
                    ▼
        🍃 MongoDB Database
```

## 📖 Penjelasan

Frontend hanya bertugas **menampilkan tampilan website**.

Backend bertugas **memproses seluruh logika aplikasi**.

MongoDB bertugas **menyimpan seluruh data restoran dan pesanan**.

Ketiga bagian tersebut saling terhubung.

---

# ⚙️ Persiapan Sebelum Menjalankan

Pastikan software berikut sudah tersedia.

| Software                    | Keterangan |
| --------------------------- | ---------- |
| ✅ Node.js                  | Wajib      |
| ✅ MongoDB Community Server | Wajib      |
| ✅ MongoDB Compass          | Wajib      |
| ✅ Visual Studio Code       | Disarankan |

---

# 🍃 Menjalankan MongoDB

Sebelum Backend dijalankan, pastikan MongoDB sudah aktif.

Jika menggunakan **MongoDB Community Server**, biasanya service akan berjalan otomatis.

Jika belum aktif:

1. Buka **Services** Windows.
2. Cari **MongoDB Server**.
3. Klik **Start**.

Atau cukup buka **MongoDB Compass** lalu lakukan koneksi.

---

# 🗄️ Menyiapkan Database

Buka **MongoDB Compass**.

Kemudian lakukan koneksi ke

```text
mongodb://localhost:27017
```

Jika berhasil akan muncul halaman utama MongoDB Compass.

---

## 📂 Membuat Database

Klik tombol

```text
➕ Create Database
```

Isi seperti berikut.

```text
Database Name

food_order_db
```

```text
Collection Name

restaurants
```

Lalu klik

```text
Create Database
```

---

# 📥 Mengimpor Data Restoran

Masuk ke Collection

```text
food_order_db
        │
        ▼
restaurants
```

Kemudian

```text
Add Data
      │
      ▼
Insert Document
```

Pilih mode

```text
{}
JSON
```

Paste data JSON restoran yang sudah disediakan.

Kemudian klik

```text
Insert
```

🎉 Sampai tahap ini Database sudah siap digunakan.

---

# 🔐 Konfigurasi Backend

Masuk ke folder

```text
backend/
```

Pastikan terdapat file

```text
.env
```

Isi file tersebut

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/food_order_db
```

> 📌 Pastikan nama database sama dengan yang dibuat di MongoDB Compass.

---

# 🚀 Menjalankan Backend

Buka Terminal pertama.

Masuk ke folder Backend.

```bash
cd backend
```

Install package (hanya pertama kali).

```bash
npm install
```

Jalankan Backend.

```bash
node index.js
```

Atau menggunakan Nodemon

```bash
npx nodemon index.js
```

---

## ✅ Backend Berhasil Berjalan

Jika berhasil, terminal akan menampilkan

```text
🚀 Server Running on Port 5000

✅ MongoDB Connected
```

Artinya

- Express berhasil berjalan
- MongoDB berhasil terkoneksi
- REST API siap digunakan

---

# 🎨 Menjalankan Frontend

⚠️ Jangan menutup Terminal Backend.

Buka **Terminal Baru**.

Di VS Code

```
+
New Terminal
```

Masuk ke folder Frontend.

```bash
cd frontend
```

Install package

```bash
npm install
```

Kemudian jalankan

```bash
npm run dev
```

---

## ✅ Frontend Berhasil Berjalan

Jika berhasil akan muncul

```text
Local:

http://localhost:5173
```

atau

```text
http://localhost:5174
```

Klik link tersebut atau buka melalui browser.

---

# 🌐 Website Siap Digunakan

Jika semua berhasil maka kondisi project menjadi seperti berikut.

```text
🟢 MongoDB
        │
        ▼
🟢 Backend
        │
        ▼
🟢 Frontend
        │
        ▼
🌍 Browser
```

Website sekarang sudah dapat digunakan.

---

# 🔄 Alur Kerja Website

Ketika pengguna membuka website, proses yang terjadi adalah

```text
👤 User
     │
     ▼
Frontend React
     │
     ▼
Axios Request
     │
     ▼
Backend Express
     │
     ▼
MongoDB
     │
     ▼
Data Dikirim Kembali
     │
     ▼
Frontend Menampilkan Data
```

Semua data selalu melewati Backend terlebih dahulu.

Frontend **tidak pernah mengambil data langsung dari MongoDB**.

---

# 📦 Cara Kerja Saat Checkout

Misalnya User membeli makanan.

```text
Pilih Restoran
        │
        ▼
Tambah Menu
        │
        ▼
Keranjang
        │
        ▼
Checkout
        │
        ▼
Axios POST
        │
        ▼
Backend
        │
        ▼
Validasi Stok
        │
        ▼
MongoDB
```

Jika stok cukup

```text
✅ Simpan Pesanan

↓

Kurangi Stok

↓

Checkout Berhasil

↓

SweetAlert

↓

Masuk ke Riwayat
```

Jika stok habis

```text
❌ Checkout Ditolak

↓

Popup Error

↓

Stok Tidak Berubah
```

---

# 🔒 Kenapa Stok Tidak Bisa Minus?

Backend menggunakan **Atomic Update MongoDB**.

Operator yang digunakan

```text
$gte
```

untuk mengecek stok.

Kemudian

```text
$inc
```

untuk mengurangi stok.

Karena kedua proses dilakukan secara atomik, maka stok tidak akan pernah menjadi negatif meskipun ada banyak pengguna melakukan checkout secara bersamaan.

---

# 📊 Cara Kerja Revenue

Revenue tidak dihitung menggunakan JavaScript biasa.

Perhitungan dilakukan langsung oleh MongoDB.

```text
Order
     │
     ▼
Status = Diproses
     │
Admin
Mengubah Status
     │
     ▼
Status = Selesai
     │
     ▼
Aggregation Pipeline
     │
     ▼
$match
     │
     ▼
$group
     │
     ▼
$totalRevenue
```

Keuntungan menggunakan Aggregation Pipeline

- ⚡ Lebih cepat
- 📊 Lebih efisien
- 🗄️ Diproses langsung oleh Database

---

# 🧩 Konsep Database yang Digunakan

Project ini menggunakan dua konsep MongoDB.

## 📌 Embedding

Menu disimpan di dalam dokumen Restaurant.

```text
Restaurant

│

├── Nama

├── Gambar

└── Menu[]

      ├── Nama

      ├── Harga

      └── Stok
```

---

## 📌 Referencing

Order hanya menyimpan ID Restaurant.

```text
Order

│

├── Customer

├── RestaurantID

├── Total

└── Status
```

Dengan cara ini data menjadi lebih efisien dan tidak terjadi duplikasi data restoran.

---

# 🎯 Tips Jika Terjadi Error

## ❌ Website Tidak Bisa Dibuka

Periksa

- Apakah Frontend sudah berjalan?
- Apakah menggunakan `npm run dev`?

---

## ❌ Data Tidak Muncul

Periksa

- Backend berjalan?
- MongoDB aktif?
- Collection sudah berisi data?

---

## ❌ MongoDB Tidak Connect

Periksa file

```text
backend/.env
```

Pastikan

```env
MONGO_URI=mongodb://localhost:27017/food_order_db
```

sudah benar.

---

## ❌ API Error

Pastikan Backend berjalan pada

```text
http://localhost:5000
```

dan Frontend menggunakan URL API yang benar.

---

# 🎉 Sampai di Sini...

Sekarang aplikasi sudah berhasil dijalankan dan kamu sudah memahami bagaimana **Frontend**, **Backend**, dan **MongoDB** saling bekerja sama.

➡️ **Part 3B** akan membahas:

- 🌐 Daftar lengkap REST API
- 🧪 Cara Testing menggunakan Browser & Postman
- 👨‍🏫 Skenario Presentasi ke Dosen
- 🏆 Checklist Penilaian CRUD, Relasi, Aggregation, dan Atomicity
- ❓ FAQ (Pertanyaan yang sering ditanyakan dosen)

---

# 🌐 REST API Documentation

Backend menyediakan beberapa **REST API** yang digunakan oleh Frontend untuk mengambil, mengirim, dan memperbarui data.

## 📌 Base URL

```text
http://localhost:5000/api
```

---

# 📋 Daftar Endpoint

| Method | Endpoint                        | Fungsi                              |
| ------ | ------------------------------- | ----------------------------------- |
| GET    | `/restaurants`                  | Mengambil seluruh data restoran     |
| GET    | `/restaurants/search?q=keyword` | Mencari restoran/menu               |
| POST   | `/orders`                       | Membuat pesanan baru                |
| GET    | `/orders`                       | Menampilkan seluruh riwayat pesanan |
| PUT    | `/orders/:id`                   | Mengubah status pesanan             |
| GET    | `/stats/revenue`                | Menghitung total pendapatan         |

---

# 📖 Penjelasan Endpoint

## 🍽️ GET `/restaurants`

Mengambil seluruh daftar restoran beserta menu.

Digunakan pada halaman:

- 🏠 Home
- 🍽️ Restaurant Detail

Contoh Response

```json
[
  {
    "_id": "...",
    "name": "Warung Nusantara",
    "menu": [
      {
        "name": "Nasi Goreng",
        "price": 20000,
        "stock": 15
      }
    ]
  }
]
```

---

## 🔍 GET `/restaurants/search`

Digunakan untuk mencari restoran atau makanan.

Contoh

```text
/api/restaurants/search?q=nasi
```

Backend menggunakan

✅ MongoDB Text Index

bukan filter React biasa.

---

## 🛒 POST `/orders`

Digunakan ketika tombol **Checkout** ditekan.

Frontend mengirim data seperti

```json
{
  "customerName":"Budi",
  "restaurantId":"...",
  "items":[...]
}
```

Backend kemudian

- ✅ Validasi stok
- ✅ Mengurangi stok
- ✅ Menyimpan pesanan
- ✅ Menghitung total harga

---

## 📜 GET `/orders`

Menampilkan seluruh riwayat transaksi.

Digunakan pada halaman

📜 Order History

---

## 🔄 PUT `/orders/:id`

Mengubah status pesanan.

Contoh

```text
Diproses

↓

Dikirim

↓

Selesai
```

Digunakan oleh Admin.

---

## 💰 GET `/stats/revenue`

Menghasilkan laporan total pendapatan.

Contoh Response

```json
{
  "totalRevenue": 450000
}
```

Revenue dihitung menggunakan

- `$match`
- `$group`
- `$sum`

---

# 🔄 Alur Request API

```text
Frontend

↓

Axios

↓

REST API

↓

Express

↓

Controller

↓

MongoDB

↓

Response JSON

↓

Frontend
```

Semua komunikasi aplikasi melewati REST API.

---

# 🧪 Cara Testing

Project dapat diuji menggunakan dua cara.

## 🌍 Browser

Untuk endpoint GET.

Contoh

```text
http://localhost:5000/api/restaurants
```

```text
http://localhost:5000/api/orders
```

```text
http://localhost:5000/api/stats/revenue
```

Browser akan menampilkan data JSON.

---

## 📬 Postman

Digunakan untuk

- GET
- POST
- PUT

lebih mudah dibanding Browser.

Contoh

```text
POST /orders
```

Body

```json
{
  ...
}
```

Kemudian klik

```text
Send
```

---

# 🧪 Skenario Pengujian

## ✅ Pengujian 1

### Menampilkan Restoran

Langkah

- Jalankan Backend
- Jalankan Frontend
- Buka Home

Hasil

✅ Daftar restoran muncul.

---

## ✅ Pengujian 2

### Pencarian

Cari

```text
Nasi Goreng
```

Hasil

✅ Restoran yang memiliki menu tersebut akan tampil.

---

## ✅ Pengujian 3

### Checkout

Tambahkan makanan ke keranjang.

Klik

```text
Checkout
```

Hasil

✅ Pesanan berhasil dibuat.

✅ Riwayat bertambah.

✅ Stok berkurang.

---

## ✅ Pengujian 4

### Anti Stok Minus

Beli makanan melebihi stok.

Misalnya

```text
Stock = 2

Pesan = 5
```

Hasil

❌ Pesanan ditolak.

❌ Stok tetap.

---

## ✅ Pengujian 5

### Revenue

Ubah status menjadi

```text
Selesai
```

Kemudian buka

```text
/api/stats/revenue
```

Hasil

✅ Total pendapatan bertambah.

---

# 🎓 Panduan Presentasi ke Dosen

Berikut urutan demo yang disarankan saat presentasi.

---

## 🎨 1. UI & Navigasi

Tunjukkan

- 🌙 Dark Mode
- ☀️ Light Mode
- Responsive Layout

Jelaskan

> Frontend dibuat menggunakan React.js dan Vite sehingga perpindahan halaman berlangsung cepat tanpa reload.

---

## 🔍 2. Pencarian

Cari

```text
Nasi Goreng
```

Jelaskan

> Pencarian dilakukan menggunakan MongoDB Text Index sehingga proses pencarian langsung diproses oleh database.

---

## 🛒 3. CRUD

Masuk ke Detail Restoran.

Tambah menu.

Checkout.

Jelaskan

- ✅ Create
- ✅ Read

Kemudian buka Riwayat.

Jelaskan

- Update Status

---

## 🔒 4. Atomicity

Pesan makanan melebihi stok.

Jelaskan

> Backend menggunakan operator `$gte` dan `$inc` sehingga stok tidak dapat menjadi negatif meskipun ada banyak pengguna melakukan checkout secara bersamaan.

---

## 📊 5. Revenue

Buka

```text
/api/stats/revenue
```

Jelaskan

> Revenue dihitung menggunakan MongoDB Aggregation Pipeline melalui operator `$match`, `$group`, dan `$sum`.

---

# 🏆 Kriteria Penilaian

| Penilaian              | Status  |
| ---------------------- | ------- |
| ✅ CRUD                | Selesai |
| ✅ Relasi MongoDB      | Selesai |
| ✅ REST API            | Selesai |
| ✅ React SPA           | Selesai |
| ✅ MongoDB Aggregation | Selesai |
| ✅ Atomic Update       | Selesai |
| ✅ Dark Mode           | Selesai |
| ✅ SweetAlert2         | Selesai |
| ✅ Search              | Selesai |
| ✅ UI Modern           | Selesai |

---

# ❓ FAQ

## Kenapa Frontend dan Backend dipisah?

Agar kode lebih modular, mudah dikembangkan, dan sesuai standar industri.

---

## Kenapa memakai MongoDB?

Karena MongoDB fleksibel, cepat, dan sangat cocok untuk aplikasi berbasis dokumen seperti sistem pemesanan makanan.

---

## Kenapa memakai React?

Karena React mampu membuat antarmuka yang cepat, reusable, dan mendukung konsep Single Page Application (SPA).

---

## Kenapa memakai Express?

Express memudahkan pembuatan REST API yang ringan, cepat, dan mudah dikembangkan.

---

## Kenapa memakai Mongoose?

Mongoose membantu membuat schema, validasi data, serta mempermudah interaksi dengan MongoDB.

---

# 📝 Kesimpulan

PorsiKita merupakan aplikasi **Food Ordering berbasis MERN Stack** yang menerapkan konsep **Decoupled Architecture**, sehingga Frontend dan Backend dipisahkan agar lebih modular dan mudah dikembangkan.

Aplikasi ini telah mengimplementasikan berbagai konsep penting dalam pengembangan web modern, seperti **REST API**, **CRUD**, **MongoDB Schema**, **Referencing**, **Embedding**, **Aggregation Pipeline**, **Atomic Update**, serta **Single Page Application (SPA)**.

Selain itu, aplikasi juga dilengkapi dengan fitur **Dark Mode**, **MongoDB Text Search**, **SweetAlert2**, **Manajemen Stok**, **Kontrol Admin**, dan **Laporan Pendapatan**, sehingga tidak hanya memenuhi kebutuhan tugas akademik, tetapi juga mencerminkan praktik pengembangan perangkat lunak yang mendekati standar industri.

---

# ❤️ Terima Kasih

Terima kasih telah menggunakan dan mempelajari project **PorsiKita**.

Semoga dokumentasi ini dapat membantu memahami struktur project, cara menjalankan aplikasi, serta mempermudah proses pengembangan di masa mendatang.

⭐ Jangan lupa memberikan **Star** apabila project ini bermanfaat.
