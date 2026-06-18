import React from "react";
import * as Icons from "lucide-react";
import { advantages } from "../data/content";

const WhyUs = () => {
  return (
    <section id="kenapa-kami" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight">
            Kenapa Pilih AutoPro Servis?
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="font-body font-normal text-sm md:text-base text-gray-600 leading-relaxed">
            Kami berkomitmen memberikan kenyamanan, keamanan, dan kejujuran dalam setiap detail servis mobil Anda.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => {
            const IconComponent = Icons[item.icon] || Icons.Award;

            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 hover:border-amber-500 rounded-xl p-6 transition-all duration-200 group hover:shadow-md"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-lg bg-navy-950 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-200">
                  <IconComponent className="w-6 h-6 text-amber-500 group-hover:text-navy-950 transition-colors duration-200" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-[18px] text-gray-900 mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body font-normal text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
