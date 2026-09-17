import { Activity } from "lucide-react";
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
        </div>
      </div>
    </footer>
  );
}
