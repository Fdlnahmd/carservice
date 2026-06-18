import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { navLinks, generalInfo } from "../data/content";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Jika di luar homepage (misal 404), redirect ke homepage + hash
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ease-in-out px-6 flex items-center justify-between ${
          isScrolled
            ? "bg-navy-800 border-b border-navy-600 shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-white transition-colors duration-200 hover:text-amber-400"
        >
          <img src="/logo.png" alt="AutoPro Logo" className="w-8 h-8 object-contain rounded-md border border-navy-600 bg-navy-950" />
          <span>{generalInfo.brandName.toUpperCase()}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-body font-medium text-[14px] text-navy-100 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking-form"
            onClick={(e) => handleLinkClick(e, "#booking-form")}
            className="flex items-center gap-2 font-body font-semibold text-[13px] bg-amber-500 hover:bg-amber-400 text-navy-950 px-4 h-9 rounded-full transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Booking Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-white hover:text-amber-500 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[80vw] bg-navy-800 border-l border-navy-600 shadow-2xl p-6 flex flex-col space-y-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pb-4 border-b border-navy-600">
          <span className="font-display font-bold text-lg text-white">MENU</span>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="text-navy-100 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-body font-medium text-base text-navy-100 hover:text-white py-2 border-b border-navy-600/30 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking-form"
            onClick={(e) => handleLinkClick(e, "#booking-form")}
            className="flex items-center justify-center gap-2 font-body font-semibold text-sm bg-amber-500 hover:bg-amber-400 text-navy-950 py-3 rounded-full transition-all duration-150 transform active:scale-95 shadow-lg shadow-amber-500/10"
          >
            <PhoneCall className="w-4 h-4" />
            Booking Sekarang
          </a>
        </div>

        <div className="mt-auto pt-6 border-t border-navy-600 text-xs text-navy-100/70 space-y-2">
          <p className="font-semibold text-white">{generalInfo.brandName}</p>
          <p>{generalInfo.address}</p>
          <p>{generalInfo.hours}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
