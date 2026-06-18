# Design Spec — Landing Page Service Mobil

**Version:** 1.0  
**Pendekatan:** Mobile-first, konversi via WA, clean & profesional  
**Tone:** Percaya diri, teknikal, bukan korporat

---

## Prinsip Desain

Bengkel yang bagus bukan yang paling ramai warnanya — tapi yang paling bikin orang yakin. Setiap keputusan desain harus menjawab satu pertanyaan: *apakah ini bikin orang percaya dan ambil tindakan?*

Tiga aturan utama:
1. **Kejelasan di atas estetika.** Harga, layanan, dan nomor WA harus bisa ditemukan dalam 5 detik.
2. **Berat di atas ringan.** Typography bold, spasi konsisten, elemen sedikit tapi kuat.
3. **Satu aksen, dipakai dengan hemat.** Amber hanya untuk CTA dan highlight — bukan dekorasi.

---

## Color Palette

Tidak pakai biru terang generik. Pakai navy gelap sebagai warna utama — otoritatif, teknikal, percaya diri. Amber sebagai aksen satu-satunya: khas dunia otomotif (lampu, cat, velg), dan kontras kuat di atas navy.

| Token | Hex | Penggunaan |
|---|---|---|
| `--navy-950` | `#0A0F1E` | Background hero, footer |
| `--navy-800` | `#1A2340` | Surface card gelap, navbar scroll |
| `--navy-600` | `#2E3F6F` | Border, divider subtle |
| `--navy-100` | `#D6DCF0` | Teks muted di atas background gelap |
| `--amber-500` | `#F59E0B` | CTA utama, highlight angka, ikon aktif |
| `--amber-400` | `#FCD34D` | Hover state CTA |
| `--white` | `#FFFFFF` | Body section background, teks di navy |
| `--gray-50` | `#F9FAFB` | Background section alternating |
| `--gray-200` | `#E5E7EB` | Border kartu di section terang |
| `--gray-600` | `#4B5563` | Body text, deskripsi |
| `--gray-900` | `#111827` | Heading di section terang |

**Aturan warna:**
- Section hero & footer: background `--navy-950`, teks `--white`
- Section konten (layanan, testimoni, dll): alternating `--white` dan `--gray-50`
- CTA button primer: background `--amber-500`, teks `--navy-950`, hover `--amber-400`
- CTA button sekunder: border `--white`, teks `--white`, hover background `rgba(255,255,255,0.1)`
- Jangan pakai amber untuk teks body — kontras terlalu rendah di background terang

---

## Typography

Tidak pakai Inter saja — itu pilihan SaaS, bukan bengkel. Pakai dua typeface dengan karakter yang berbeda:

| Role | Font | Weight | Catatan |
|---|---|---|---|
| Display | `Barlow Condensed` | 700, 800 | Untuk headline besar, angka statistik, nama layanan |
| Body | `Inter` | 400, 500, 600 | Untuk deskripsi, label, UI element |

Keduanya tersedia di Google Fonts. `Barlow Condensed` punya karakter teknikal dan padat — cocok untuk judul yang perlu impak tanpa makan banyak ruang di mobile.

### Type Scale

```
--text-xs:   12px / Inter 400       → label, caption, copyright
--text-sm:   14px / Inter 400–500   → deskripsi card, meta info
--text-base: 16px / Inter 400       → body text
--text-lg:   18px / Inter 500–600   → subheading, nama layanan
--text-xl:   20px / Inter 600       → section subtitle
--text-2xl:  24px / Barlow 700      → card title besar, harga
--text-4xl:  36px / Barlow 800      → section heading
--text-6xl:  56px / Barlow 800      → hero headline (mobile: 40px)
--text-stat: 64px / Barlow 800      → angka statistik (mobile: 48px)
```

### Line Height & Spacing

```
Display (Barlow):  line-height: 1.05 — ketat, padat, berkarakter
Body (Inter):      line-height: 1.65 — nyaman dibaca
Letter-spacing display: -0.02em    — sedikit rapat untuk headline besar
Letter-spacing body:     0          — default
```

---

## Spacing System

Berbasis 4px grid. Konsisten di semua komponen.

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-6:   24px
--space-8:   32px
--space-12:  48px
--space-16:  64px
--space-24:  96px
--space-32:  128px
```

**Section padding:** `--space-24` atas-bawah di desktop, `--space-16` di mobile.  
**Container max-width:** `1200px`, padding horizontal `--space-6` mobile, `--space-8` tablet+.

---

## Border Radius

```
--radius-sm:   4px   → badge, tag, input
--radius-md:   8px   → kartu konten, dropdown
--radius-lg:   12px  → kartu layanan, kartu harga
--radius-xl:   16px  → modal, panel besar
--radius-full: 9999px → button, pill, floating button WA
```

CTA button: `--radius-full` — kontras dengan elemen persegi di sekitarnya, memperjelas bahwa ini actionable.

---

## Component Spec

### Navbar

```
Height:        64px
Background:    transparent saat top, --navy-800 saat scroll (transition 200ms)
Border-bottom: none saat top, 1px solid --navy-600 saat scroll
Logo:          Barlow Condensed 700, 20px, --white
Nav links:     Inter 500, 14px, --navy-100, hover --white
CTA nav:       Button kecil amber, height 36px, px-16px
Mobile:        Hamburger icon, drawer dari kanan, full-width links
```

### Hero Section

```
Background:    --navy-950
Min-height:    100svh
Layout:        Centered, max-width 760px

Eyebrow:       Inter 500, 13px, --amber-500, letter-spacing 0.1em, uppercase
               Contoh: "BENGKEL RESMI • JAKARTA SELATAN"

Headline:      Barlow Condensed 800, 56px (mobile: 40px)
               --white, line-height 1.05
               Contoh: "Servis Mobil Beres, Harga Jelas"
               — bukan "profesional terpercaya" yang generik

Subline:       Inter 400, 18px (mobile: 16px), --navy-100, max-width 520px
               1–2 kalimat, spesifik

CTA row:       gap 12px, flex-wrap
               Button primer: "Booking Sekarang" → scroll ke form
               Button sekunder: "Hubungi WhatsApp" → wa.me link

Stats bar:     Terletak di bawah CTA, border-top 1px --navy-600, padding-top 32px
               3 angka dalam satu row
               Format: angka besar (Barlow 800, 64px, --white) + satuan kecil
                       di kanan tengah (Inter 500, 14px, --amber-500)
                       + label di bawah (Inter 400, 13px, --navy-100)
               Contoh: "2.400" mobil diservis | "4.9" rating | "8" tahun
               — ini signature element halaman: panel speedometer, bukan grid biasa
```

### Service Cards

```
Layout:        Grid 2 kolom mobile, 3 kolom desktop, gap 16px
Card:          Background --white, border 1px --gray-200, radius --radius-lg
               Padding 24px, hover: border-color --amber-500, transition 200ms

Icon area:     48x48px, background --navy-950, radius --radius-md
               Icon warna --amber-500, ukuran 24px

Nama layanan:  Barlow Condensed 700, 20px, --gray-900
Deskripsi:     Inter 400, 14px, --gray-600, 2 baris max
Harga:         Inter 600, 16px, --gray-900
               Label "mulai dari" Inter 400, 12px, --gray-600 di atas harga
```

### CTA Button

```
Primer (amber):
  background:    --amber-500
  color:         --navy-950
  font:          Inter 600, 15px
  padding:       14px 28px
  radius:        --radius-full
  hover:         background --amber-400, scale(1.02)
  active:        scale(0.98)
  transition:    150ms ease

Sekunder (outline putih, untuk di atas background gelap):
  background:    transparent
  border:        1.5px solid rgba(255,255,255,0.5)
  color:         --white
  hover:         background rgba(255,255,255,0.08), border-color --white

Sekunder (outline abu, untuk di atas background terang):
  border:        1.5px solid --gray-200
  color:         --gray-900
  hover:         background --gray-50, border-color --gray-400
```

### WhatsApp Floating Button

```
Position:      fixed, bottom 24px, right 24px, z-index 50
Size:          56px × 56px
Background:    #25D366 (warna WA resmi — jangan diganti)
Icon:          Logo WA SVG, 28px, putih
Radius:        --radius-full
Shadow:        0 4px 12px rgba(37, 211, 102, 0.4)
Hover:         scale(1.08), shadow lebih besar
Mobile:        bottom 80px (hindari gesture area browser)

Tooltip:       "Chat WhatsApp" muncul saat hover (desktop only)
               Inter 500, 13px, background --gray-900, radius --radius-sm
```

### Testimonial Cards

```
Layout:        Grid 1 kolom mobile, 2 kolom tablet, 3 kolom desktop
Card:          Background --white, border 1px --gray-200, radius --radius-lg
               Padding 24px

Quote mark:    Barlow Condensed 800, 64px, --amber-500, line-height 0
               Positioned absolute top-left sebagai dekorasi
               — bukan ikon SVG, tapi karakter " dari font

Teks review:   Inter 400, 15px, --gray-600, line-height 1.65
Nama:          Inter 600, 15px, --gray-900
Keterangan:    Inter 400, 13px, --gray-600 (contoh: "Toyota Avanza, servis berkala")
Rating:        5 bintang solid --amber-500, ukuran 14px
```

### Booking Form

```
Background section: --navy-950
Form card:     Background --navy-800, border 1px --navy-600, radius --radius-xl
               Padding 32px (mobile: 24px)

Label:         Inter 500, 13px, --navy-100, margin-bottom 6px
Input:         Background --navy-950, border 1px --navy-600, radius --radius-md
               Color --white, placeholder --navy-100 opacity 0.5
               Focus: border-color --amber-500, outline none
               Height 44px, padding 0 14px

Select:        Sama dengan input, tambah custom arrow --amber-500

Textarea:      Sama dengan input, min-height 96px, resize vertical

Submit button: Full-width, primer amber, height 52px, font-size 16px
               Teks: "Kirim via WhatsApp →"
               Loading state: teks berubah jadi "Membuka WhatsApp..."
```

### FAQ Accordion

```
Container:     max-width 720px, centered
Item:          Border-bottom 1px --gray-200, tidak ada border lain

Question:      Inter 500, 16px, --gray-900
               Padding 20px 0, cursor pointer
               Icon: chevron-down --gray-400, rotasi 180deg saat open

Answer:        Inter 400, 15px, --gray-600, line-height 1.7
               Padding-bottom 20px
               Animasi: height 0 → auto, opacity 0 → 1, 200ms ease

Hover:         Question text --gray-900 → --navy-950 (subtle)
```

---

## Motion & Animation

Prinsip: animasi harus ada alasannya. Jangan animate sesuatu yang tidak menambah informasi.

```
Scroll reveal:    Fade up 20px, opacity 0→1, 400ms ease-out
                  Hanya untuk section heading dan kartu — bukan setiap elemen
                  Gunakan Intersection Observer, bukan library berat

Hover transisi:   150ms ease untuk color, border
                  200ms ease untuk transform (scale, translate)

Accordion:        200ms ease untuk height dan opacity

Navbar bg:        200ms ease saat scroll

WA Button:        Scale 1→1.08, 150ms ease

Reduced motion:   Semua animasi dimatikan jika
                  @media (prefers-reduced-motion: reduce)
```

---

## Responsive Breakpoints

```
mobile:   < 640px   → 1 kolom, font display lebih kecil, padding dikurangi
tablet:   640–1024px → 2 kolom grid, spacing intermediate
desktop:  > 1024px  → 3 kolom grid, full spacing
```

**Mobile-specific rules:**
- Hero headline: 40px (bukan 56px)
- Stats font: 48px (bukan 64px)
- Section padding: 64px atas-bawah (bukan 96px)
- WA button naik ke bottom 80px (hindari gesture bar)
- Navbar: hamburger menu, drawer overlay dari kanan

---

## Tailwind Config

Mapping dari token di atas ke Tailwind custom values:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          100: '#D6DCF0',
          600: '#2E3F6F',
          800: '#1A2340',
          950: '#0A0F1E',
        },
        amber: {
          400: '#FCD34D',
          500: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        stat: ['64px', { lineHeight: '1', fontWeight: '800' }],
      },
    },
  },
}
```

---

## Copy Guidelines

Teks adalah bagian dari desain. Beberapa aturan:

**Hindari:**
- "Profesional dan terpercaya" — semua bisnis ngaku begitu
- "Kami melayani dengan sepenuh hati" — tidak spesifik
- "Harga bersaing" — tidak ada artinya tanpa angka

**Gunakan:**
- Angka spesifik: "Lebih dari 2.400 mobil diservis sejak 2016"
- Jaminan konkret: "Garansi servis 30 hari atau gratis perbaikan ulang"
- Aksi jelas: "Booking Sekarang" bukan "Hubungi Kami"
- Nama layanan langsung: "Ganti Oli & Filter" bukan "Oil Service Package"

**Tone:** Percaya diri, ringkas, tidak oversell. Seperti mekanik senior yang sudah terlalu banyak pengalaman untuk perlu berteriak.

---

## Hal yang Tidak Boleh Dilakukan

- Jangan pakai lebih dari 2 typeface
- Jangan pakai amber untuk teks body atau label biasa — hanya untuk highlight dan CTA
- Jangan tambah shadow/glow pada card — border tipis cukup
- Jangan pakai border-radius lebih dari `--radius-lg` pada card konten
- Jangan pakai animasi parallax — memperlambat di mobile low-end
- Jangan pakai warna berbeda untuk setiap layanan/ikon — pilih satu (amber) dan konsisten
- Jangan taruh lebih dari 2 CTA dalam satu viewport
