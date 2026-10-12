"use client";

import { useState } from "react";

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (i) => setActiveIndex(i);


  return (

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
  )}


