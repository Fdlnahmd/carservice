export const generalInfo = {
  phone: "6281584350420", // Format international untuk WhatsApp
  email: "info@autoproservis.id",
  address: "Jl. Otto Iskandardinata No. 120, Jakarta Selatan, 12340",
  hours: "Senin - Sabtu: 08:00 - 17:00 | Minggu: Tutup",
  brandName: "AutoPro Servis",
  eyebrow: "BENGKEL RESMI • JAKARTA SELATAN",
};

export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Kenapa Kami", href: "#kenapa-kami" },
  { label: "Cara Booking", href: "#cara-booking" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" }
];

export const stats = [
  { value: "2.400", suffix: "+", label: "Mobil Diservis Sejak 2016" },
  { value: "4.9", suffix: "/5.0", label: "Rating Kepuasan Pelanggan" },
  { value: "8", suffix: "Thn", label: "Pengalaman Kerja Mekanik" }
];

export const services = [
  {
    id: "tune-up",
    icon: "Wrench",
    title: "Tune Up Engine",
    description: "Optimalisasi performa mesin, pembersihan throttle body, carbon clean, dan kalibrasi sensor sistem injeksi.",
    price: "Rp 350.000"
  },
  {
    id: "ganti-oli",
    icon: "Droplet",
    title: "Ganti Oli & Filter",
    description: "Penggantian oli mesin berkualitas tinggi dengan filter oli original untuk memperpanjang usia mesin.",
    price: "Rp 450.000"
  },
  {
    id: "servis-berkala",
    icon: "Calendar",
    title: "Servis Berkala",
    description: "Pengecekan menyeluruh sistem rem, kelistrikan, suspensi, fluida, dan diagnostic engine scanner.",
    price: "Rp 600.000"
  },
  {
    id: "servis-ac",
    icon: "Wind",
    title: "AC Mobil Service",
    description: "Penggantian filter kabin, pengisian freon, pembersihan evaporator, dan perbaikan kompresor AC.",
    price: "Rp 300.000"
  },
  {
    id: "kaki-kaki",
    icon: "ShieldAlert",
    title: "Kaki-Kaki & Suspensi",
    description: "Pengecekan tierod, rack end, ball joint, shockbreaker, serta spooring dan balancing presisi.",
    price: "Rp 400.000"
  },
  {
    id: "detailing-mesin",
    icon: "Sparkles",
    title: "Engine Detailing",
    description: "Pembersihan kerak kotoran, minyak, dan debu membandel di ruang mesin untuk cegah korosi & korsleting.",
    price: "Rp 250.000"
  }
];

export const advantages = [
  {
    icon: "Award",
    title: "Mekanik Bersertifikat",
    description: "Seluruh tim mekanik kami memiliki sertifikasi resmi pabrikan dan pengalaman bertahun-tahun di bidang otomotif."
  },
  {
    icon: "CheckCircle",
    title: "Spare Part Original",
    description: "Kami hanya menggunakan suku cadang original atau aftermarket berkualitas premium demi keamanan berkendara Anda."
  },
  {
    icon: "ShieldCheck",
    title: "Garansi Servis 30 Hari",
    description: "Semua pengerjaan di bengkel kami dilindungi oleh garansi selama 30 hari. Jika ada masalah, kami perbaiki gratis."
  },
  {
    icon: "TrendingUp",
    title: "Harga Transparan",
    description: "Estimasi biaya diberikan di awal sebelum pengerjaan. Tidak ada biaya tersembunyi atau tambahan tak terduga."
  }
];

export const bookingSteps = [
  {
    step: "01",
    title: "Pilih Layanan",
    description: "Pilih layanan servis yang Anda butuhkan melalui formulir pemesanan online di bawah ini."
  },
  {
    step: "02",
    title: "Konfirmasi Jadwal",
    description: "Admin kami akan menghubungi Anda via WhatsApp untuk memverifikasi waktu dan ketersediaan slot."
  },
  {
    step: "03",
    title: "Datang ke Bengkel",
    description: "Bawa mobil Anda ke lokasi kami sesuai jadwal yang telah dikonfirmasi, atau gunakan jasa jemput mobil."
  }
];

export const testimonials = [
  {
    name: "Budi Santoso",
    rating: 5,
    comment: "Sangat puas dengan servis tune up di sini. Mesin Toyota Avanza saya yang tadinya loyo sekarang jadi responsif lagi. Harga transparan dan mekaniknya menjelaskan dengan sangat detail.",
    vehicle: "Toyota Avanza • Servis Tune Up"
  },
  {
    name: "Siti Rahma",
    rating: 5,
    comment: "Pelayanannya ramah banget dan cepat. AC Honda Jazz saya yang tadinya panas banget sekarang langsung dingin menggigil. Harganya juga bersahabat banget dibanding bengkel resmi.",
    vehicle: "Honda Jazz • AC Mobil Service"
  },
  {
    name: "Hendra Wijaya",
    rating: 5,
    comment: "Baru pertama kali coba servis berkala di AutoPro dan langsung jatuh hati. Pengerjaan rapi, ada garansi 30 hari lagi. Recomended banget buat yang cari bengkel jujur.",
    vehicle: "Mitsubishi Xpander • Servis Berkala"
  },
  {
    name: "Rian Hidayat",
    rating: 5,
    comment: "Ganti oli dan spooring balancing di sini cepet banget, ga perlu ngantri lama karena udah booking lewat web. Penjelasan mekaniknya mantap dan informatif.",
    vehicle: "Suzuki Ertiga • Spooring & Ganti Oli"
  },
  {
    name: "Dewi Lestari",
    rating: 5,
    comment: "Sangat terbantu dengan layanan penjemputan mobil. Mobil diservis pas saya kerja, sorenya dianter balik udah bersih dan enak dikendarai. Terima kasih AutoPro!",
    vehicle: "Nissan Livina • Servis Berkala & Jemput"
  },
  {
    name: "Andi Pratama",
    rating: 5,
    comment: "Pengerjaan kaki-kaki mobil sangat presisi. Bunyi gluduk-gluduk di roda depan Toyota Innova saya akhirnya hilang total setelah ditangani mekanik senior AutoPro.",
    vehicle: "Toyota Innova • Kaki-Kaki & Suspensi"
  }
];

export const pricingPackages = [
  {
    name: "Paket Ganti Oli Ringan",
    price: "Rp 450.000",
    description: "Cocok untuk perawatan rutin berkala ringan (tiap 5.000 KM).",
    features: [
      "Oli Mesin Premium (4 Liter)",
      "Filter Oli Original",
      "Pembersihan Filter Udara",
      "General Inspection 10 Poin",
      "Jasa Pemasangan"
    ],
    popular: false
  },
  {
    name: "Paket Tune Up & Carbon Clean",
    price: "Rp 650.000",
    description: "Kembalikan performa mesin dan hemat bahan bakar Anda.",
    features: [
      "Pembersihan Throttle Body",
      "Pembersihan Kerak Karbon (Carbon Clean)",
      "Pengecekan Busi & Koil",
      "Scan Diagnostic Engine",
      "Pembersihan Filter Udara/AC",
      "Garansi Pengerjaan 30 Hari"
    ],
    popular: true
  },
  {
    name: "Paket Servis Berkala Lengkap",
    price: "Rp 1.100.000",
    description: "Perawatan total untuk kenyamanan dan keamanan berkendara Anda.",
    features: [
      "Oli Mesin Premium (4 Liter) & Filter Oli",
      "Tune Up & Diagnostic Scan",
      "Service & Pembersihan Rem (4 Roda)",
      "Pengecekan Kaki-Kaki & Kolong",
      "Cek Sistem Kelistrikan & Aki",
      "Layanan Antar-Jemput Gratis"
    ],
    popular: false
  }
];

export const faqs = [
  {
    question: "Apakah suku cadang (spare part) yang digunakan original?",
    answer: "Ya, kami menjamin seluruh suku cadang yang kami gunakan adalah original resmi dari pabrikan kendaraan Anda atau aftermarket kelas premium yang teruji kualitas dan keamanannya."
  },
  {
    question: "Berapa lama waktu pengerjaan untuk servis tune up?",
    answer: "Untuk tune up standar biasanya memakan waktu sekitar 1 hingga 2 jam. Sedangkan untuk paket servis berkala lengkap dapat memakan waktu 2 hingga 4 jam tergantung kondisi kendaraan."
  },
  {
    question: "Bagaimana cara klaim garansi servis 30 hari?",
    answer: "Jika Anda merasakan keluhan yang sama dalam waktu 30 hari setelah servis, cukup hubungi admin kami via WhatsApp atau datang langsung ke bengkel dengan menunjukkan bukti kuitansi pembayaran servis. Kami akan memperbaiki kembali tanpa tambahan biaya jasa apa pun."
  },
  {
    question: "Apakah bisa melakukan booking online terlebih dahulu?",
    answer: "Sangat disarankan. Dengan mengisi form booking di website ini, Anda akan diprioritaskan saat datang dan terhindar dari antrean panjang. Admin kami akan mengonfirmasi slot waktu Anda sesaat setelah form dikirimkan."
  },
  {
    question: "Apakah tersedia layanan antar-jemput mobil?",
    answer: "Ya, kami menyediakan layanan antar-jemput gratis untuk radius 10 KM dari bengkel kami bagi pelanggan yang mengambil Paket Servis Berkala Lengkap atau servis dengan estimasi biaya di atas Rp 1.000.000."
  }
];
