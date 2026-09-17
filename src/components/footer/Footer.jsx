import Link from "next/link";
import { Activity, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/doctors", label: "Our Doctors" },
      { href: "/gallery", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#laboratory", label: "Laboratory" },
      { href: "/services#imaging", label: "Imaging" },
      { href: "/services#cardiology", label: "Cardiology" },
      { href: "/packages", label: "Health Packages" },
      { href: "/blood-collection", label: "Home Collection" },
    ],
  },
  {
    title: "Patient Services",
    links: [
      { href: "/appointment", label: "Book Appointment" },
      { href: "/reports", label: "Check Report" },
      { href: "/blood-collection", label: "Blood Collection" },
      { href: "/doctors", label: "Find a Doctor" },
      { href: "/faq", label: "FAQs" },
    ],
  },
];


export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-xl grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Activity size={20} strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-white">
                S. Alam Digital
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-teal-400">
                Diagnostic Center
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
            Trusted Diagnosis, Better Care. Advanced diagnostic services,
            experienced doctors and modern medical technology, all in one place.
          </p>
           <div className="mt-6 space-y-2.5 text-sm text-navy-300">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-teal-400" />
              House 14, Road 7, Gulshan-2, Dhaka 1212, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-teal-400" />
              16263 / 01711-000000
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-teal-400" />
              care@salamdiagnostic.com.bd
            </p>
            <p className="flex items-center gap-2">
              <Clock size={16} className="shrink-0 text-teal-400" />
              Saturday – Thursday, 8:00 AM – 10:00 PM
            </p>
          </div>
             <div className="mt-6 flex items-center gap-3">
            {[FaFacebook, FaYoutube, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-300 transition-colors hover:border-teal-500 hover:text-teal-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
