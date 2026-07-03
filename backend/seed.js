const mongoose = require("mongoose");
require("dotenv").config();
const Restaurant = require("./models/Restaurant");

const dataWarung = [
  {
    name: "Ayam Taliwang Asli Bima",
    address: "Jl. Soekarno Hatta, Bima",
    cuisineType: "Indonesian",
    rating: 4.9,
    description: "Pedasnya nampol, bikin nangis teringat mantan.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&fit=crop",
    menus: [
      {
        name: "Ayam Bakar Taliwang",
        price: 45000,
        stock: 20,
        image:
          "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Kopi Anak IT",
    address: "Depan Lab Komputer",
    cuisineType: "Beverage",
    rating: 4.7,
    description:
      "Kopi khusus programmer. 1 teguk = 100 baris kode tanpa error.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&fit=crop",
    menus: [
      {
        name: "Kopi Susu Begadang",
        price: 18000,
        stock: 100,
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Pizza RTX 5070 Ti",
    address: "Jalan Teknologi No. 1",
    cuisineType: "Italian",
    rating: 5.0,
    description:
      "Di-render menggunakan Ray Tracing. Pinggirannya garing parah!",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&fit=crop",
    menus: [
      {
        name: "Pizza Pepperoni HD",
        price: 85000,
        stock: 10,
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Nasi Padang MAN 1",
    address: "Sebelah Sekolahan",
    cuisineType: "Indonesian",
    rating: 4.8,
    description: "Porsi kuli harga pelajar. Kenyang sampai besok lusa.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&fit=crop",
    menus: [
      {
        name: "Nasi Rendang Spesial",
        price: 25000,
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Sushi Cyberpunk",
    address: "Night City, Sektor 4",
    cuisineType: "Japanese",
    rating: 4.6,
    description: "Sushi masa depan. Menyala abangku! 🔥",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&fit=crop",
    menus: [
      {
        name: "Salmon Mentai Roll",
        price: 45000,
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Ramen Resident Evil",
    address: "Racoon City",
    cuisineType: "Japanese",
    rating: 4.5,
    description: "Aman dikonsumsi, tidak mengandung T-Virus.",
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&fit=crop",
    menus: [
      {
        name: "Spicy Miso Ramen",
        price: 40000,
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Warung Kopi Brainrot",
    address: "Ohio",
    cuisineType: "Absurd",
    rating: 4.9,
    description:
      "Tempat nongkrong para Sigma dan Sepuh. Skibidi bop bop yes yes.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75bf699?w=800&fit=crop",
    menus: [
      {
        name: "Skibidi Slicers",
        price: 99000,
        stock: 99,
        image:
          "https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Seafood Sultan Lawata",
    address: "Pantai Lawata Bima",
    cuisineType: "Seafood",
    rating: 4.8,
    description: "Kepitingnya ditangkap langsung oleh Aquaman.",
    image:
      "https://images.unsplash.com/photo-1565557612165-27a4d538eec7?w=800&fit=crop",
    menus: [
      {
        name: "Kepiting Saus Padang",
        price: 150000,
        stock: 10,
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Dimsum Flutter",
    address: "Mobile App UI",
    cuisineType: "Chinese",
    rating: 4.7,
    description: "Dimsum cross-platform. Enak dimakan di Android maupun iOS.",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&fit=crop",
    menus: [
      {
        name: "Hakau Udang",
        price: 20000,
        stock: 35,
        image:
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Gelato Kali Linux",
    address: "Jalur Root",
    cuisineType: "Dessert",
    rating: 5.0,
    description:
      "Es krim favorit para ethical hacker. Segar menembus firewall.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c8e9e1cb?w=800&fit=crop",
    menus: [
      {
        name: "Dark Chocolate Gelato",
        price: 25000,
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1570197781417-0a5237500ee3?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Burger Kelas E",
    address: "Kantin Kampus",
    cuisineType: "Western",
    rating: 4.4,
    description:
      "Langganan mahasiswa kelas E. Bikin kenyang pas ngerjain tugas.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&fit=crop",
    menus: [
      {
        name: "Double Beef Burger",
        price: 35000,
        stock: 15,
        image:
          "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Bebek Goreng Docker",
    address: "Server Container",
    cuisineType: "Indonesian",
    rating: 4.7,
    description: "Digoreng di dalam container terisolasi. Higienis 100%.",
    image:
      "https://images.unsplash.com/photo-1604908177525-ce54964923f8?w=800&fit=crop",
    menus: [
      {
        name: "Bebek Goreng Sambal Korek",
        price: 35000,
        stock: 25,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Tacos El Bima",
    address: "Pantai Kalaki",
    cuisineType: "Mexican",
    rating: 4.6,
    description: "Cita rasa Meksiko berpadu dengan kearifan lokal Bima.",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&fit=crop",
    menus: [
      {
        name: "Beef Tacos",
        price: 35000,
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Warung Soto Lamongan",
    address: "Jalan Bypass",
    cuisineType: "Indonesian",
    rating: 4.5,
    description: "Koyanya melimpah ruah seperti bug di kodinganku.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&fit=crop",
    menus: [
      {
        name: "Soto Ayam Koya",
        price: 20000,
        stock: 50,
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&fit=crop",
      },
    ],
  },
  {
    name: "Martabak Ryzen 9",
    address: "Perempatan Jalan",
    cuisineType: "Dessert",
    rating: 4.9,
    description: "Dimasak dengan panas CPU 90 derajat. Cepat matang!",
    image:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=800&fit=crop",
    menus: [
      {
        name: "Martabak Telur Daging",
        price: 60000,
        stock: 20,
        image:
          "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?w=500&fit=crop",
      },
    ],
  },
];

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/food_order_db")
  .then(async () => {
    console.log("Menghapus data warung yang error...");
    await Restaurant.deleteMany({}); // Hapus bersih data lama
    console.log("Menanam 15 warung baru...");
    await Restaurant.insertMany(dataWarung);
    console.log("✅ SUKSES! Tekan Ctrl+C untuk keluar.");
    process.exit();
  });
