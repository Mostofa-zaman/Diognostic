"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => open(i)}
            className="focus-ring group relative aspect-square overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/70 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-xs font-medium text-white">{img.category}</span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Close gallery"
            className="focus-ring absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>
            <button
            onClick={prev}
            aria-label="Previous image"
            className="focus-ring absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-6"
          >
            <ChevronLeft size={22} />
          </button>
            <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-cardHover"
          />
            <button
            onClick={next}
            aria-label="Next image"
            className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-6"
          >
            <ChevronRight size={22} />
          </button>
        
      
        </div>
      )}
    </>
  );
}
