import Link from "next/link";
import Card from "@/components/common/Card";
import Label from "@/components/common/Label";
import Button from "@/components/common/Button";
import { CheckCircle2 } from "lucide-react";

export default function PackageCard({ pkg }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Label tone="teal">{pkg.audience}</Label>
          <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
            {pkg.name}
          </h3>
          <p className="mt-1 text-sm text-navy-500">{pkg.testCount} Tests Included</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {pkg.tests.slice(0, 5).map((t) => (
          <li key={t} className="flex items-start gap-2 text-sm text-navy-600">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-teal-600" />
            {t}
          </li>
        ))}
        {pkg.tests.length > 5 && (
          <li className="text-sm font-medium text-teal-700">
            +{pkg.tests.length - 5} more tests
          </li>
        )}
      </ul>

      <div className="mt-6 flex items-end justify-between border-t border-navy-100 pt-4">
        <div>
          <p className="font-display text-2xl font-semibold text-navy-900">{pkg.price}</p>
          <p className="text-xs text-navy-400 line-through">{pkg.originalPrice}</p>
        </div>
        <Link
          href={`/packages/${pkg.slug}`}
          className="focus-ring text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          View Details
        </Link>
      </div>
      <Button href={`/appointment?package=${pkg.slug}`} className="mt-4 w-full">
        Book Package
      </Button>
    </Card>
  );
}
