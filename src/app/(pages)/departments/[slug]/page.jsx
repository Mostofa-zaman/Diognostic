import Link from "next/link";
import { notFound } from "next/navigation";
import { departments } from "@/data/departments";
import { getDoctorsByDepartment } from "@/data/doctors";
import Icon from "@/components/common/IconProvider";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";
import DoctorCard from "@/components/common/DoctorCard";

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const dept = departments.find((d) => d.slug === params.slug);
  if (!dept) return {};
  return { title: dept.name, description: dept.description };
}

export default async function DepartmentDetailsPage({ params }) {
  const { slug } = await params;

  const department = departments.find((d) => d.slug === slug);

  if (!department) notFound();

  const deptDoctors = getDoctorsByDepartment(department.slug);

  return (
    <section className="section-py">
      <div className="container-xl">
        <Link href="/departments" className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700">
          <ArrowLeft size={15} /> Back to Departments
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
              <Icon name={department.icon} size={26} />
            </span>
            <div>
              <h1 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">
                {department.name}
              </h1>
              <p className="mt-2 max-w-xl text-navy-500">{department.description}</p>
            </div>
          </div>
          <Button href="/appointment">Book Appointment</Button>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-navy-900">
            {department.name} Specialists
          </h2>
          {deptDoctors.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {deptDoctors.map((doc) => (
                <DoctorCard key={doc.slug} doctor={doc} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-navy-500">
              Specialist listings for this department are being updated. Please contact
              our hotline to check current doctor availability.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
