import React from "react";
import { Check } from "lucide-react";
import { pricingPackages } from "../data/content";

const Pricing = () => {
  const handleBookingScroll = (e) => {
    e.preventDefault();
    const bookingSection = document.querySelector("#booking-form");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="harga" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight">
            Paket Servis Pilihan
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="font-body font-normal text-sm md:text-base text-gray-600 leading-relaxed">
            Dapatkan harga yang transparan tanpa ada biaya tersembunyi. Silakan pilih paket perawatan terbaik sesuai kebutuhan mobil Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-200 ${
                pkg.popular
                  ? "bg-navy-950 text-white border-2 border-amber-500 shadow-xl lg:scale-[1.03] z-10"
                  : "bg-white text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-body font-semibold text-[11px] uppercase tracking-wider bg-amber-500 text-navy-950 px-3 py-1 rounded-full shadow-md">
                  Rekomendasi Utama
                </span>
              )}

              <div className="space-y-6">
                {/* Header Info */}
                <div>
                  <h3 className="font-display font-bold text-[22px] uppercase tracking-wide">
                    {pkg.name}
                  </h3>
                  <p
                    className={`font-body font-normal text-xs md:text-sm mt-2 leading-relaxed ${
                      pkg.popular ? "text-navy-100" : "text-gray-600"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Price tag */}
                <div className="py-2 border-y border-dashed border-gray-200/20">
                  <span className="font-body text-xs text-gray-600 block">Estimasi mulai</span>
                  <span className="font-display font-extrabold text-[36px] tracking-tight text-amber-500 leading-none">
                    {pkg.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-2">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          pkg.popular ? "text-amber-500" : "text-navy-600"
                        }`}
                      />
                      <span
                        className={`font-body font-normal text-sm ${
                          pkg.popular ? "text-navy-100" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href="#booking-form"
                  onClick={handleBookingScroll}
                  className={`w-full flex items-center justify-center font-body font-semibold text-[14px] h-12 rounded-full transition-all duration-150 transform active:scale-95 ${
                    pkg.popular
                      ? "bg-amber-500 text-navy-950 hover:bg-amber-400 hover:scale-[1.02] shadow-lg shadow-amber-500/10"
                      : "bg-transparent border-1.5 border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-gray-950"
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
