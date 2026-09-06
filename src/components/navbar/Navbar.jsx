"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Activity, ChevronDown } from "lucide-react";
import Button from "@/components/common/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/packages", label: "Packages" },
  { href: "/reports", label: "Reports" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-navy-100 bg-white/95 backdrop-blur shadow-card"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-xl flex min-h-[72px] items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
            <Activity size={20} strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-navy-900">
              S. Alam Digital
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal-700">
              Diagnostic Center
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-teal-50 text-teal-700"
                  : "text-navy-600 hover:bg-sand-100 hover:text-navy-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/doctors" variant="outline" size="sm">
            Find a Doctor
          </Button>
          <Button href="/appointment" variant="primary" size="sm">
            Book Appointment
          </Button>
        </div>

        <button
          className="focus-ring rounded-lg p-2 text-navy-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <nav className="container-xl flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-lg px-3 py-2.5 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-teal-50 text-teal-700"
                    : "text-navy-700 hover:bg-sand-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-navy-100 pt-4">
              <Button href="/doctors" variant="outline" size="sm">
                Find a Doctor
              </Button>
              <Button href="/appointment" variant="primary" size="sm">
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
