# PRD & Implementation Plan — Landing Page Service Mobil

**Version:** 1.0  
**Stack:** React JS + Docker  
**Type:** Static landing page (no backend/database)

---

## 1. Overview

Landing page untuk bisnis jasa service mobil. Tujuan utama: konversi pengunjung jadi pelanggan via WhatsApp atau form booking. Target pengguna mayoritas akses dari mobile (referral IG/FB/WA).

---

## 2. Goals

- Tampilkan kredibilitas bisnis secara visual (testimonial, stats, layanan)
- Dorong konversi via CTA WhatsApp (sticky button)
- Informasikan layanan dan harga secara transparan
- Mobile-first, load cepat, clean & profesional

---

## 3. Scope

**In scope:**
- Static landing page (1 halaman, scroll-based)
- Semua konten hardcoded (tidak butuh CMS/database)
- Form booking (frontend only, submit ke WhatsApp)
- Responsive: mobile, tablet, desktop

**Out of scope:**
- Backend / database
- Admin panel
- Payment gateway
- Auth / login

---

## 4. Sections & Content

### 4.1 Navbar
- Logo + nama bengkel
- Link anchor: Layanan, Harga, Testimoni, Booking
- Sticky saat scroll

### 4.2 Hero
- Headline utama (contoh: "Servis Mobil Profesional, Harga Transparan")
- Subline singkat
- 2 CTA button: "Booking Sekarang" (scroll ke form) + "Hubungi WhatsApp"
- Stats bar: jumlah pelanggan, rating, tahun berdiri

### 4.3 Layanan
- Grid kartu layanan: Tune Up, Ganti Oli, Servis Berkala, Ganti Ban, AC Mobil, Kaki-Kaki
- Setiap kartu: ikon, nama layanan, deskripsi singkat, harga mulai dari

### 4.4 Kenapa Pilih Kami
- 3–4 poin keunggulan: mekanik bersertifikat, spare part original, garansi servis, harga transparan

### 4.5 Cara Booking
- 3 langkah: Pilih Layanan → Booking / Hubungi WA → Datang / Jemput
- Visual step sederhana

### 4.6 Testimoni
- 6 kartu testimoni: nama, rating bintang, teks review
- Grid 2 kolom di mobile, 3 kolom di desktop

### 4.7 Harga / Paket
- Tabel atau kartu harga per layanan utama
- Label "Harga Mulai Dari" + satuan

### 4.8 FAQ
- 5–6 pertanyaan umum dengan accordion
- Contoh: "Apakah spare part original?", "Berapa lama waktu servis?"

### 4.9 Form Booking
- Fields: Nama, Nomor HP, Jenis Mobil, Layanan (dropdown), Tanggal, Catatan
- Submit → generate pesan WA otomatis → buka wa.me link

### 4.10 Footer
- Info kontak, alamat, jam operasional
- Link sosmed
- Copyright

### 4.11 WhatsApp Sticky Button
- Floating button kanan bawah, selalu visible
- Langsung buka chat WA

---

## 5. Design Spec

| Aspek | Keputusan |
|---|---|
| Warna utama | Biru #1D4ED8 + putih |
| Warna aksen | Abu-abu #6B7280 |
| Font | Inter (Google Fonts) |
| Border radius | 8px card, 24px button |
| Breakpoint mobile | < 768px |
| Breakpoint tablet | 768–1024px |

---

## 6. Tech Stack

| Layer | Teknologi |
|---|---|
| Frontend | React JS (Vite) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Container | Docker + Nginx |
| CI/CD (opsional) | GitHub Actions |

---

## 7. Struktur Folder

```
service-mobil-landing/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── HowToBook.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── BookingForm.jsx
│   │   ├── Footer.jsx
│   │   └── WAButton.jsx
│   ├── data/
│   │   └── content.js       ← semua teks & data hardcoded di sini
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── nginx.conf
├── docker-compose.yml
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 8. Docker Setup

### Dockerfile (multi-stage build)
```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf
```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:80"
    restart: unless-stopped
```

---

## 9. Implementation Plan

### Phase 1 — Setup & Scaffolding (Hari 1)
- [ ] Init project: `npm create vite@latest . -- --template react`
- [ ] Install dependencies: Tailwind CSS, Lucide React
- [ ] Setup Tailwind config + custom color palette
- [ ] Buat struktur folder sesuai spec
- [ ] Buat `content.js` dengan semua data dummy (teks, harga, testimoni)

### Phase 2 — Komponen Utama (Hari 2–3)
- [ ] Navbar (sticky, anchor link, mobile hamburger menu)
- [ ] Hero (headline, CTA button, stats bar)
- [ ] Services (grid kartu layanan)
- [ ] WhyUs (keunggulan)
- [ ] HowToBook (3 langkah)

### Phase 3 — Komponen Konversi (Hari 4)
- [ ] Testimonials (grid + rating bintang)
- [ ] Pricing (tabel/kartu harga)
- [ ] FAQ (accordion)
- [ ] BookingForm (form → generate link WA)
- [ ] WAButton (floating sticky)

### Phase 4 — Polish & Responsif (Hari 5)
- [ ] Review semua breakpoint (mobile/tablet/desktop)
- [ ] Smooth scroll behavior
- [ ] Loading state form
- [ ] Meta tags (OG, title, description) untuk SEO dasar
- [ ] Favicon & assets

### Phase 5 — Docker & Deploy (Hari 6)
- [ ] Tulis Dockerfile (multi-stage)
- [ ] Tulis nginx.conf
- [ ] Test build: `docker compose up --build`
- [ ] Verifikasi di browser: localhost:3000
- [ ] (Opsional) Push image ke Docker Hub / deploy ke VPS

---

## 10. Estimasi Waktu

| Phase | Estimasi |
|---|---|
| Setup & Scaffolding | 0.5 hari |
| Komponen Utama | 2 hari |
| Komponen Konversi | 1.5 hari |
| Polish & Responsif | 1 hari |
| Docker & Deploy | 0.5 hari |
| **Total** | **~5–6 hari** |

---

## 11. Catatan Tambahan

- Semua nomor WA, harga, nama bengkel disimpan di `src/data/content.js` — mudah diganti tanpa ubah komponen
- Form booking tidak butuh backend: data dikonversi jadi teks WA dan dibuka via `wa.me?text=...`
- Gambar menggunakan placeholder dari Unsplash/Pexels sampai foto asli tersedia
- Untuk production, tambahkan HTTPS via reverse proxy (Nginx + Certbot) atau Cloudflare
