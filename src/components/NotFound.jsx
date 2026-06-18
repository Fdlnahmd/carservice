import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,15,30,0.6),rgba(10,15,30,0.98))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto flex flex-col items-center space-y-6">
        
        {/* Animated Icon */}
        <div className="relative w-28 h-28 bg-navy-800 border-2 border-navy-600 rounded-full flex items-center justify-center text-amber-500 mb-2 animate-bounce">
          <ShieldAlert className="w-14 h-14" />
          <div className="absolute inset-0 rounded-full border border-amber-500/20 scale-125 animate-ping" />
        </div>

        {/* 404 Header */}
        <h1 className="font-display font-extrabold text-[80px] md:text-[100px] text-white leading-none tracking-tighter">
          404
        </h1>

        {/* Themed Subtitle */}
        <h2 className="font-display font-bold text-[24px] md:text-[28px] text-amber-500 uppercase tracking-wider">
          ENGINE ERROR: SALAH BELOK!
        </h2>

        {/* Paragraph */}
        <p className="font-body font-normal text-sm md:text-base text-navy-100 leading-relaxed">
          Opps! Sepertinya sistem transmisi Anda membawa ke jalan yang salah. Halaman yang Anda cari tidak ditemukan atau sudah dipindahkan.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body font-semibold text-[15px] bg-amber-500 text-navy-950 px-8 py-3.5 rounded-full hover:bg-amber-400 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-amber-500/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Bengkel (Beranda)
        </Link>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="font-body text-[11px] text-navy-100/50">
          © {new Date().getFullYear()} AutoPro Servis. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
