import React, { useState } from "react";
import { generalInfo } from "../data/content";

const WAButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const waText = encodeURIComponent(
      "Halo AutoPro Servis, saya berkunjung ke website Anda dan ingin bertanya mengenai layanan servis mobil."
    );
    window.open(`https://wa.me/${generalInfo.phone}?text=${waText}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-50 flex items-center gap-3 select-none">
      {/* Tooltip (Desktop only) */}
      <div
        className={`hidden md:block bg-gray-900 text-white font-body font-medium text-[13px] px-3.5 py-2 rounded-lg shadow-lg transition-all duration-200 transform origin-right ${
          showTooltip ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 translate-x-4 pointer-events-none"
        }`}
      >
        Chat WhatsApp
      </div>

      {/* Floating Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-[1.08] active:scale-[0.95] focus:outline-none focus:ring-4 focus:ring-green-400/30 relative"
        aria-label="Hubungi WhatsApp"
        style={{
          boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
        }}
      >
        {/* SVG WhatsApp Logo */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12.031 2c-5.514 0-9.99 4.477-9.99 9.99 0 2.08.636 4.015 1.728 5.626L2 22l4.526-1.46c1.558 1.01 3.415 1.6 5.42 1.6 5.513 0 10.023-4.477 10.023-9.99C22.054 6.477 17.544 2 12.03 2zm0 16.586c-1.8 0-3.477-.577-4.85-1.556l-.348-.246-2.585.834.848-2.505-.28-.426c-1.12-1.7-1.776-3.725-1.776-5.897 0-4.72 3.842-8.56 8.56-8.56 4.72 0 8.56 3.84 8.56 8.56 0 4.72-3.84 8.56-8.56 8.56zm4.86-6.72c-.266-.134-1.576-.777-1.82-.865-.246-.09-.425-.133-.606.134-.18.267-.7.865-.858 1.046-.16.18-.316.2-.58.067-.267-.133-1.127-.415-2.148-1.325-.794-.71-1.33-1.587-1.487-1.854-.158-.267-.017-.41.116-.543.12-.12.267-.31.4-.467.13-.157.177-.267.266-.445.09-.177.044-.33-.022-.465-.067-.134-.606-1.458-.83-2-.22-.53-.445-.46-.607-.468-.157-.008-.337-.008-.517-.008-.18 0-.473.067-.72.333-.248.267-.946.924-.946 2.25 0 1.327.965 2.61 1.1 2.787.134.18 1.9 2.9 4.6 4.07.643.28 1.144.446 1.534.57.647.205 1.235.176 1.7.106.518-.077 1.577-.644 1.8-1.233.22-.59.22-1.1.157-1.2-.064-.105-.244-.16-.51-.295z" />
        </svg>
      </button>
    </div>
  );
};

export default WAButton;
