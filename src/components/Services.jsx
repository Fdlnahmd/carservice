import React from "react";
import * as Icons from "lucide-react";
import { services } from "../data/content";

const Services = () => {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight">
            Layanan Servis Kami
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="font-body font-normal text-sm md:text-base text-gray-600 leading-relaxed">
            Perawatan lengkap dan detail untuk menjaga kenyamanan berkendara Anda. Diproses cepat dengan peralatan modern.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            // Dinamis me-load Lucide Icon berdasarkan string name
            const IconComponent = Icons[service.icon] || Icons.Wrench;

            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Icon Area */}
                  <div className="w-12 h-12 bg-navy-950 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-amber-500" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-[20px] text-gray-900 mb-2 uppercase tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body font-normal text-sm text-gray-600 leading-relaxed line-clamp-2 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Price Tag */}
                <div className="pt-4 border-t border-gray-100 flex flex-col">
                  <span className="font-body font-normal text-[12px] text-gray-600">
                    Mulai dari
                  </span>
                  <span className="font-body font-semibold text-[18px] text-gray-900">
                    {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
