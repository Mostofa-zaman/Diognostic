"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-navy-900">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-teal-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-navy-500 md:px-6">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
