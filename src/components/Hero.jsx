import React from "react";
import { MessageSquare, Calendar } from "lucide-react";
import { stats, generalInfo } from "../data/content";

const Hero = () => {
  const handleBookingScroll = (e) => {
    e.preventDefault();
    const bookingSection = document.querySelector("#booking-form");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const waText = encodeURIComponent("Halo AutoPro Servis, saya ingin bertanya tentang layanan servis mobil.");
    window.open(`https://wa.me/${generalInfo.phone}?text=${waText}`, "_blank");
  };

  return (
    <section className="relative min-h-[100svh] bg-navy-950 flex flex-col justify-center items-center px-6 pt-24 pb-28 overflow-hidden">
      {/* Background Image of modern workshop */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-65" 
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      {/* Softer Gradient overlay for high readability and image visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,15,30,0.55),rgba(10,15,30,0.35),rgba(10,15,30,0.85))] z-0" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-navy-600/20 rounded-full blur-[120px] z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[760px] w-full text-center flex flex-col items-center space-y-6">
        {/* Eyebrow */}
        <span className="font-body font-semibold text-[13px] tracking-[0.1em] text-amber-500 uppercase animate-fade-up">
          {generalInfo.eyebrow}
        </span>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-[40px] md:text-[56px] text-white leading-[1.05] tracking-tight max-w-[700px] uppercase">
          Servis Mobil Beres, <span className="text-amber-500">Harga Jelas</span>
        </h1>

        {/* Subline */}
        <p className="font-body font-normal text-base md:text-lg text-navy-100 max-w-[520px] leading-relaxed">
          Garansi servis 30 hari atau gratis perbaikan ulang. Estimasi harga di awal, pengerjaan cepat dan mekanik ahli berpengalaman.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-[12px] pt-4 w-full">
          <a
            href="#booking-form"
            onClick={handleBookingScroll}
            className="flex items-center justify-center gap-2 font-body font-semibold text-[15px] bg-amber-500 text-navy-950 px-8 py-3.5 rounded-full hover:bg-amber-400 active:scale-[0.98] hover:scale-[1.02] transition-all duration-150 shadow-lg shadow-amber-500/15"
          >
            <Calendar className="w-4 h-4" />
            Booking Sekarang
          </a>
          <button
            onClick={openWhatsApp}
            className="flex items-center justify-center gap-2 font-body font-semibold text-[15px] bg-transparent border-1.5 border-white/50 text-white px-8 py-3.5 rounded-full hover:bg-white/8 hover:border-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
          >
            <MessageSquare className="w-4 h-4" />
            Hubungi WhatsApp
          </button>
        </div>

        {/* Stats Bar (Signature Speedometer Panel style) */}
        <div className="w-full mt-12 pt-8 border-t border-navy-600/60 max-w-[680px]">
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-start">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center space-y-1"
              >
                {/* Stats Value */}
                <div className="flex items-baseline justify-center">
                  <span className="font-display font-extrabold text-[36px] md:text-[56px] text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="font-body font-semibold text-xs md:text-sm text-amber-500 ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                {/* Stats Label */}
                <span className="font-body font-normal text-[11px] md:text-[13px] text-navy-100 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curved SVG Divider at the bottom (Transitions to Services section bg-gray-50) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[68px]" fill="#F9FAFB">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
