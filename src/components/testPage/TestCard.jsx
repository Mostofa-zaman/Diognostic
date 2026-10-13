import Link from "next/link";
import Card from "@/components/common/Card";
import Label from "@/components/common/Label";
import { Droplet, Clock } from "lucide-react";

export default function TestCard({ test }) {
  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-2">
        <Label tone="navy">{test.category}</Label>
        <span className="font-mono text-sm font-semibold text-teal-700">{test.price}</span>
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{test.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-navy-500">
        {test.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-navy-500">
        <span className="flex items-center gap-1.5">
          <Droplet size={13} className="text-teal-600" /> {test.sample}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={13} className="text-teal-600" /> {test.reportTime}
        </span>
      </div>
      <Link
        href={`/tests/${test.slug}`}
        className="focus-ring mt-4 inline-flex items-center justify-center rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Book Test
      </Link>
    </Card>
  );
}
