import Link from "next/link";
import { Phone, Clock, Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    
    <div className="hidden bg-navy-900 text-navy-100 md:block">
      <div className="container-xl flex h-10 items-center justify-between text-xs">
        
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={13} className="text-teal-400" />
            Hotline: 16263 / 01711-000000
          </span>

          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-teal-400" />
            Open 24/7 — Sat–Thu 8:00 AM–10:00 PM
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-teal-400" />
            Chittagong Road, Narayanganj
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Mail size={13} className="text-teal-400" />
            care@salamdiagnostic.com.bd
          </span>

          <Link href="/reports" className="hover:text-teal-300">
            Check Report
          </Link>

          <Link href="/faq" className="hover:text-teal-300">
            FAQ
          </Link>
        </div>

      </div>
    </div>
  );
}