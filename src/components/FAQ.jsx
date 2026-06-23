import React, { useState } from "react";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down.mjs";
import { faqs } from "../data/content";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto"></div>
          <p className="font-body font-normal text-sm md:text-base text-gray-600 leading-relaxed">
            Punya pertanyaan lain? Berikut adalah beberapa jawaban atas pertanyaan yang paling sering ditanyakan oleh pelanggan kami.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-[720px] mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left py-5 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-body font-medium text-[16px] text-gray-900 group-hover:text-navy-950 transition-colors duration-150">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ease-out shrink-0 ml-4 ${
                      isOpen ? "transform rotate-180 text-amber-500" : ""
                    }`}
                  />
                </button>

                {/* Answer Wrapper with CSS animation */}
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out`}
                  style={{
                    maxHeight: isOpen ? "250px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="font-body font-normal text-[15px] text-gray-600 line-height-[1.7] pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
