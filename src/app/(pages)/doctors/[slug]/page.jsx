import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DoctorDetailsPage() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <Link
          href="/doctors"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700"
        >
          <ArrowLeft size={15} /> Back to All Doctors
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6 sm:flex-row">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="h-56 w-56 shrink-0 rounded-2xl object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
