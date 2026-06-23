import React from "react";
import MapPin from "lucide-react/dist/esm/icons/map-pin.mjs";
import Phone from "lucide-react/dist/esm/icons/phone.mjs";
import Mail from "lucide-react/dist/esm/icons/mail.mjs";
import Clock from "lucide-react/dist/esm/icons/clock.mjs";
import Shield from "lucide-react/dist/esm/icons/shield.mjs";
import { generalInfo, navLinks } from "../data/content";

const Footer = () => {
  const handleScrollToTop = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Description */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl uppercase tracking-wider text-amber-500">
            {generalInfo.brandName}
          </h3>
          <p className="font-body text-xs md:text-sm text-navy-100/85 leading-relaxed">
            Penyedia layanan perawatan dan perbaikan mobil profesional dengan teknisi ahli bersertifikat resmi. Kami menjamin kepuasan berkendara Anda dengan garansi 30 hari.
          </p>
          <div className="flex items-center gap-2 pt-2 text-amber-500/80 font-body text-xs">
            <Shield className="w-4 h-4 shrink-0" />
            <span>Garansi Servis Terjamin 100%</span>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-md uppercase tracking-wider text-white">
            Pintasan Navigasi
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollToTop(e, link.href)}
                  className="font-body text-xs md:text-sm text-navy-100/85 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-md uppercase tracking-wider text-white">
            Info Kontak Kami
          </h4>
          <ul className="space-y-3 font-body text-xs md:text-sm text-navy-100/85">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <span>{generalInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>+{generalInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{generalInfo.email}</span>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold text-md uppercase tracking-wider text-white">
            Jam Operasional
          </h4>
          <div className="flex items-start gap-2 text-navy-100/85 font-body text-xs md:text-sm">
            <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <span>{generalInfo.hours}</span>
          </div>
          {/* Socials */}
          <div className="pt-4 space-y-2">
            <h5 className="font-body font-semibold text-xs uppercase tracking-wider text-white/80">
              Ikuti Kami
            </h5>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-navy-100 hover:text-amber-500 hover:bg-navy-600 transition-colors"
                aria-label="Instagram"
              >
                {/* SVG Instagram */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800 flex items-center justify-center text-navy-100 hover:text-amber-500 hover:bg-navy-600 transition-colors"
                aria-label="Facebook"
              >
                {/* SVG Facebook */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-navy-800/80 text-center font-body text-[11px] text-navy-100/65">
        <p>© {new Date().getFullYear()} {generalInfo.brandName}. All rights reserved.</p>
        <p className="mt-1">Didesain dengan presisi untuk kenyamanan berkendara Anda.</p>
      </div>
    </footer>
  );
};

export default Footer;
