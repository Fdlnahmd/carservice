import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data/content";

const Testimonials = () => {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight">
            Apa Kata Pelanggan Kami?
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="font-body font-normal text-sm md:text-base text-gray-600 leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah ulasan jujur dari pengendara yang mempercayakan mobilnya kepada kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col justify-between overflow-hidden group hover:border-gray-300 transition-colors duration-200"
            >
              {/* Large Quote Mark decoration */}
              <div className="absolute -top-4 -left-1 font-display font-extrabold text-[80px] text-amber-500/10 leading-none pointer-events-none">
                "
              </div>

              <div className="relative z-10 space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-body font-normal text-[15px] text-gray-600 leading-[1.65]">
                  {t.comment}
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-gray-100 relative z-10">
                <h4 className="font-body font-semibold text-[15px] text-gray-900">
                  {t.name}
                </h4>
                <p className="font-body font-normal text-[13px] text-gray-600 mt-0.5">
                  {t.vehicle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
