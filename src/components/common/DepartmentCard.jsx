import Link from "next/link";
import Card from "@/components/common/Card";
import Icon from "@/components/common/IconProvider";
import { ArrowRight } from "lucide-react";

export default function DepartmentCard({ department }) {
  return (
    <Card className="flex flex-col p-6">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        <Icon name={department.icon} size={22} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
        {department.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
        {department.description}
      </p>
      <Link
        href={`/departments/${department.slug}`}
        className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
      >
        View Doctors <ArrowRight size={15} />
      </Link>
    </Card>
  );
}
