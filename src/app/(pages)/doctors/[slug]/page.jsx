import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/common/Button";
import Label from "@/components/common/Label";

export default function DoctorDetailsPage({params}) {
      const doctor = getDoctorBySlug(params.slug);
  if (!doctor) notFound();

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
               <div>
                <Label tone="teal">{doctor.specialty}</Label>
                <h1 className="mt-3 font-display text-3xl font-semibold text-navy-900">
                  {doctor.name}
                </h1>
                <p className="mt-1 text-navy-500">{doctor.degree}</p>
                <p className="mt-1 text-sm text-navy-400">{doctor.experience} Experience</p>
                <Button href={`/appointment?doctor=${doctor.slug}`} className="mt-5">
                  Book Appointment
                </Button>
              </div>
            </div>
             <div className="mt-10">
              <h2 className="font-display text-xl font-semibold text-navy-900">Professional Bio</h2>
              <p className="mt-2 text-navy-500 leading-relaxed">{doctor.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
