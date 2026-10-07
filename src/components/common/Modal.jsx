"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, children, className = "" }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm animate-fadeUp"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-md rounded-2xl bg-white p-6 shadow-cardHover animate-fadeUp md:p-8 ${className}`}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="focus-ring absolute right-4 top-4 rounded-full p-1.5 text-navy-400 hover:bg-sand-100 hover:text-navy-700"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
