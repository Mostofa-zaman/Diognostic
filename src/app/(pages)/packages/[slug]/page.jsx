import Label from "@/components/common/Label";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/packages";
import { CheckCircle2, ArrowLeft } from "lucide-react";


export default function PackageDetailsPage() {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();

  return (
    <section className="section-py">
      <div className="container-xl">
        <Link
          href="/packages"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700"
        >
          <ArrowLeft size={15} /> Back to Packages
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Label tone="teal">{pkg.audience}</Label>
            <h1 className="mt-4 font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              {pkg.name}
            </h1>
            <p className="mt-3 text-navy-500">
              {pkg.testCount} tests included in this package.
            </p>
               <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">Included Tests</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {pkg.tests.map((t) => (
                  <div key={t} className="flex items-center gap-2.5 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-700">
                    <CheckCircle2 size={16} className="shrink-0 text-teal-600" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
