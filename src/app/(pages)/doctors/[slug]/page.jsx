import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { serviceGroups } from "@/data/services";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Label from "@/components/common/Label";
import {
  Calendar,
  Clock,
  Wallet,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const doctor = getDoctorBySlug(slug);

  if (!doctor) return {};

  return {
    title: doctor.name,
    description: `${doctor.specialty} — ${doctor.degree}`,
  };
}

export default async function DoctorDetailsPage({ params }) {
  const { slug } = await params;

  const doctor = getDoctorBySlug(slug);

  if (!doctor) notFound();

  const others = doctors
    .filter((d) => d.slug !== doctor.slug)
    .slice(0, 3);

  const relatedServices =
    serviceGroups.find((g) => g.slug === "cardiology") || serviceGroups[0];

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

                <p className="mt-1 text-navy-500">
                  {doctor.degree}
                </p>

                <p className="mt-1 text-sm text-navy-400">
                  {doctor.experience} Experience
                </p>

                <Button
                  href={`/appointment?doctor=${doctor.slug}`}
                  className="mt-5"
                >
                  Book Appointment
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Professional Bio
              </h2>

              <p className="mt-2 leading-relaxed text-navy-500">
                {doctor.bio}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Areas of Expertise
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {doctor.expertise.map((e) => (
                  <div
                    key={e}
                    className="flex items-center gap-2.5 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-teal-600"
                    />

                    {e}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Related Services
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {relatedServices.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full bg-sand-100 px-3 py-1.5 text-xs font-medium text-navy-600"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Other Specialists
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/doctors/${o.slug}`}
                    className="focus-ring flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-3 transition-colors hover:border-teal-300"
                  >
                    <img
                      src={o.photo}
                      alt={o.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm font-semibold text-navy-800">
                        {o.name}
                      </p>

                      <p className="text-xs text-navy-400">
                        {o.specialty}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24 space-y-4 p-6">
              <h3 className="font-display text-lg font-semibold text-navy-900">
                Chamber Schedule
              </h3>

              <div className="flex items-center gap-3 text-sm">
                <Calendar
                  size={17}
                  className="text-teal-600"
                />

                <div>
                  <p className="text-navy-400">
                    Available Days
                  </p>

                  <p className="font-medium text-navy-800">
                    {doctor.days}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Clock
                  size={17}
                  className="text-teal-600"
                />

                <div>
                  <p className="text-navy-400">
                    Consultation Hours
                  </p>

                  <p className="font-medium text-navy-800">
                    {doctor.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Wallet
                  size={17}
                  className="text-teal-600"
                />

                <div>
                  <p className="text-navy-400">
                    Consultation Fee
                  </p>

                  <p className="font-medium text-navy-800">
                    {doctor.fee}
                  </p>
                </div>
              </div>

              <Button
                href={`/appointment?doctor=${doctor.slug}`}
                className="w-full"
              >
                Book Appointment
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}