import Link from "next/link";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { Calendar, Clock } from "lucide-react";

export default function DoctorCard({ doctor }) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/doctors/${doctor.slug}`} className="block">
        <div className="aspect-[4/3] w-full overflow-hidden bg-sand-100">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/doctors/${doctor.slug}`}>
          <h3 className="font-display text-lg font-semibold text-navy-900 hover:text-teal-700">
            {doctor.name}
          </h3>
        </Link>
        <p className="mt-0.5 text-sm text-navy-500">{doctor.degree}</p>
        <p className="mt-1 text-sm font-semibold text-teal-700">{doctor.specialty}</p>
        <p className="mt-1 text-xs text-navy-400">{doctor.experience} Experience</p>

        <div className="mt-4 space-y-1.5 border-t border-navy-100 pt-4 text-xs text-navy-500">
          <p className="flex items-center gap-1.5">
            <Calendar size={13} className="text-teal-600" /> {doctor.days}
          </p>
          <p className="flex items-center gap-1.5">
            <Clock size={13} className="text-teal-600" /> {doctor.time}
          </p>
        </div>

        <Button href={`/appointment?doctor=${doctor.slug}`} size="sm" className="mt-4 w-full">
          Book Appointment
        </Button>
      </div>
    </Card>
  );
}
