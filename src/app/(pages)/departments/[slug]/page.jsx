import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { departments } from "@/data/departments";
import Icon from "@/components/common/IconProvider";
import Button from "@/components/common/Button";

export default async function DepartmentDetailsPage({ params }) {
  const { slug } = await params;

  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    notFound();
  }

  return (
    <section className="section-py">
      <div className="container-xl">
        <Link
          href="/departments"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700"
        >
          <ArrowLeft size={15} />
          Back to Departments
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

              <p className="mt-2 max-w-xl text-navy-500">
                {department.description}
              </p>
            </div>
          </div>

          <Button href="/appointment">Book Appointment</Button>
        </div>
      </div>
    </section>
  );
}
