import React, { useState } from "react";
import Send from "lucide-react/dist/esm/icons/send.mjs";
import Calendar from "lucide-react/dist/esm/icons/calendar.mjs";
import { services, generalInfo } from "../data/content";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carType: "",
    serviceType: "",
    date: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.carType ||
      !formData.serviceType ||
      !formData.date
    ) {
      setErrorMsg("Harap lengkapi semua field bertanda bintang (*)");
      return;
    }

    setLoading(true);

    // Format text for WhatsApp
    const waMessage = `Halo AutoPro Servis, saya ingin membooking layanan servis mobil:
    
• Nama: ${formData.name}
• No. HP: ${formData.phone}
• Jenis Mobil: ${formData.carType}
• Layanan: ${formData.serviceType}
• Tanggal Servis: ${formData.date}
• Catatan Tambahan: ${formData.notes || "-"}
    
Mohon konfirmasi ketersediaan slotnya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${generalInfo.phone}?text=${encodedMessage}`;

    // Simulate loading to WhatsApp
    setTimeout(() => {
      setLoading(false);
      window.open(waUrl, "_blank");
    }, 1500);
  };

  return (
    <section id="booking-form" className="py-16 md:py-24 bg-navy-950 text-white relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
            Booking Jadwal Servis
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="font-body font-normal text-sm md:text-base text-navy-100/80 leading-relaxed">
            Isi formulir di bawah ini untuk memesan slot antrean. Data akan dikirimkan langsung ke WhatsApp admin kami untuk konfirmasi cepat.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-[620px] mx-auto bg-navy-800 border border-navy-600 rounded-2xl p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {errorMsg && (
              <div className="bg-red-500/20 border border-red-500/40 text-red-200 text-sm px-4 py-3 rounded-lg">
                {errorMsg}
              </div>
            )}

            {/* Grid fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nama */}
              <div className="flex flex-col">
                <label htmlFor="name" className="font-body font-medium text-[13px] text-navy-100 mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="bg-navy-950 border border-navy-600 rounded-lg h-11 px-4 text-white text-sm placeholder-navy-100/40 focus:border-amber-500 focus:outline-none transition-colors duration-150"
                  required
                />
              </div>

              {/* No HP */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-body font-medium text-[13px] text-navy-100 mb-1.5">
                  Nomor HP (WhatsApp) *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 0812XXXXXXXX"
                  className="bg-navy-950 border border-navy-600 rounded-lg h-11 px-4 text-white text-sm placeholder-navy-100/40 focus:border-amber-500 focus:outline-none transition-colors duration-150"
                  required
                />
              </div>

              {/* Jenis Mobil */}
              <div className="flex flex-col">
                <label htmlFor="carType" className="font-body font-medium text-[13px] text-navy-100 mb-1.5">
                  Jenis/Merek Mobil *
                </label>
                <input
                  id="carType"
                  type="text"
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  placeholder="Contoh: Toyota Avanza 2020"
                  className="bg-navy-950 border border-navy-600 rounded-lg h-11 px-4 text-white text-sm placeholder-navy-100/40 focus:border-amber-500 focus:outline-none transition-colors duration-150"
                  required
                />
              </div>

              {/* Layanan */}
              <div className="flex flex-col">
                <label htmlFor="serviceType" className="font-body font-medium text-[13px] text-navy-100 mb-1.5">
                  Jenis Layanan *
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-navy-950 border border-navy-600 rounded-lg h-11 px-4 text-white text-sm placeholder-navy-100/40 focus:border-amber-500 focus:outline-none transition-colors duration-150 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Pilih Layanan
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title} className="bg-navy-800 text-white">
                        {s.title}
                      </option>
                    ))}
                    <option value="Lainnya" className="bg-navy-800 text-white">
                      Lainnya (Tulis di Catatan)
                    </option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-amber-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Tanggal Servis */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="date" className="font-body font-medium text-[13px] text-navy-100 mb-1.5">
                  Pilih Tanggal Servis *
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-navy-950 border border-navy-600 rounded-lg h-11 px-4 text-white text-sm focus:border-amber-500 focus:outline-none transition-colors duration-150 cursor-pointer"
                  required
                />
              </div>

              {/* Catatan */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="notes" className="font-body font-medium text-[13px] text-navy-100 mb-1.5">
                  Catatan Keluhan / Kebutuhan Tambahan
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tulis keluhan mobil Anda (misal: AC kurang dingin, bunyi mendecit pada rem depan)"
                  rows={4}
                  className="bg-navy-950 border border-navy-600 rounded-lg p-4 text-white text-sm placeholder-navy-100/40 focus:border-amber-500 focus:outline-none transition-colors duration-150 resize-y min-h-[96px]"
                ></textarea>
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[52px] bg-amber-500 text-navy-950 hover:bg-amber-400 font-body font-semibold text-base rounded-full flex items-center justify-center gap-2 transform transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80 disabled:cursor-not-allowed shadow-lg shadow-amber-500/10"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                  Membuka WhatsApp...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim via WhatsApp →
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default BookingForm;
