import { Activity, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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
        </div>
      </div>
    </footer>
  );
}
