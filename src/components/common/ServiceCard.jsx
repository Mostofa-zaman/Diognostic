import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/common/Card";
import Icon from "@/components/common/IconProvider";

export default function ServiceCard({ group }) {
  return (
    <Card className="flex h-full flex-col p-6" id={group.slug}>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Icon name={group.icon} size={22} />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
        {group.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">{group.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.slice(0, 5).map((item) => (
          <li
            key={item}
            className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-navy-600"
          >
            {item}
          </li>
        ))}
        {group.items.length > 5 && (
          <li className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-navy-600">
            +{group.items.length - 5} more
          </li>
        )}
      </ul>
      <Link
        href={`/services#${group.slug}`}
        className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
      >
        View Tests <ArrowRight size={15} />
      </Link>
    </Card>
  );
}
