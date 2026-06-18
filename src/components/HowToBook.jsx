import React from "react";
import { bookingSteps } from "../data/content";

const HowToBook = () => {
  return (
    <section id="cara-booking" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight">
            3 Langkah Mudah Booking
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="font-body font-normal text-sm md:text-base text-gray-600 leading-relaxed">
            Proses pemesanan cepat dan mudah. Hanya butuh beberapa menit agar jadwal servis Anda terjadwal aman.
          </p>
        </div>

        {/* Steps Flex/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-navy-600/20 z-0" />

          {bookingSteps.map((stepItem, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center space-y-4 px-4"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-full bg-navy-950 border-2 border-amber-500 flex items-center justify-center font-display font-bold text-[24px] text-amber-500 shadow-md transform hover:scale-105 transition-transform duration-150">
                {stepItem.step}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-[20px] text-gray-900 uppercase tracking-wide">
                {stepItem.title}
              </h3>

              {/* Description */}
              <p className="font-body font-normal text-sm text-gray-600 leading-relaxed max-w-[280px]">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToBook;
