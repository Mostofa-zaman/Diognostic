
"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, children, className = "" }) {
  useEffect(() => {
    if (!open) return;

    function onKey(e) {
      if (e.key === "Escape") {
        onClose?.();
      }
    }

    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className=" absolute fixed inset-x-0 bottom-0 top-[0px] z-[9999] flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Box */}
      <div
        className={`relative z-10 my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl md:p-8 ${className}`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-1.5 text-navy-400 transition-colors hover:bg-sand-100 hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          <X size={18} />
        </button>

        {children}
      </div>
    </div>
  );
}
