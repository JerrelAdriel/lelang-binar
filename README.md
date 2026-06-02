# 🔨 Lelang Binar (Second Hand)

> Aplikasi e-commerce lelang barang bekas — **Final Project Studi Independen Binar Academy** (2022).
> Pengguna bisa list produk, melakukan penawaran (nego), dan kelola transaksi.

![React](https://img.shields.io/badge/React-18-blue) ![Bootstrap](https://img.shields.io/badge/React--Bootstrap-5-purple) ![Node](https://img.shields.io/badge/Node.js-Express-green) ![JWT](https://img.shields.io/badge/Auth-JWT-yellow)

## ✨ Features

- 🛍️ Browse produk dengan grid responsive (5 cols → 2 cols)
- 📄 Detail page dengan carousel foto, profile penjual, deskripsi
- 💬 **Sistem nego** — modal "Saya Tertarik dan Ingin Nego"
- 🔐 JWT authentication
- ❤️ Favorite produk
- 👤 Seller dashboard (CRUD produk, manage tawaran)
- 🎨 Demo mode dengan 12 produk dummy (Apple, MacBook, Nike, Canon, dll)

## 🚀 Quick Start (Demo Mode)

```bash
# Frontend
cd frontendlelang_final_project
npm install
npm start
# → http://localhost:3001 (atau port lain)

# Saat backend tidak tersedia, app auto fallback ke dummy data
```

## 📂 Project Structure (Monorepo)

```
lelang-binar/
├── frontendlelang_final_project/   # React.js client
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cards/              # Product card grid
│   │   │   ├── Details/            # Detail page + nego popup
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   └── ...
│   │   ├── pages/                  # Page-level components
│   │   │   ├── buyer/
│   │   │   ├── seller/
│   │   │   └── ProductDetails/
│   │   ├── dummyProducts.js        # 12 dummy products for demo
│   │   └── App.js                  # Router setup
│   └── public/
└── backendlelang_final_project/    # Node.js + Express API
```

## 🛠️ Tech Stack

**Frontend:**
- React.js (Create React App)
- React Bootstrap (UI components)
- React Router DOM
- Axios (HTTP)
- jwt-decode v4 (JWT parsing)
- React Icons

**Backend:**
- Node.js + Express
- JWT authentication
- REST API

## 🔄 Recent Updates (Juni 2026)

### Bug Fixes
- 🐛 **Fix `CardComponent` crash** saat user belum login — `jwt(null)` throw error, sekarang null-safe try-catch
- 🐛 **Fix React Bootstrap warning** — `<Container md>` → `<Container fluid="md">`
- 🐛 **Fix scroll terblokir** — `body { overflow: hidden }` → `overflow-y: auto`
- 🐛 **Fix CSS leak** — `p { height: 20px }` di `button.module.css` leak ke semua `<p>` di app. CSS Modules **tidak scope element selectors!**
- 🐛 **Fix jwt-decode v4 import** — named export `{ jwtDecode }` instead of default

### New Features
- ✨ **Dummy data fallback** — 12 produk realistis dengan gambar Unsplash, deskripsi lengkap, profile penjual
- ✨ **Mock nego submit** — popup success "Tawaran Terkirim" saat backend tidak tersedia
- ✨ **Modern card grid** — uniform size, hover lift, responsive (xs=2, sm=3, md=4, lg=5)

## 👤 Author

**Jerrel Adriel A Hutahaean**
Fullstack Developer · Jakarta, Indonesia

- 🌐 Portfolio: [jerreladriel.github.io](https://jerreladriel.github.io)
- 💼 LinkedIn: [jerrelhutahaean](https://www.linkedin.com/in/jerrelhutahaean)

---

📚 **Full documentation** di [Portfolio Documentation](https://github.com/JerrelAdriel/JerrelAdriel.github.io/blob/main/DOCUMENTATION.md).
