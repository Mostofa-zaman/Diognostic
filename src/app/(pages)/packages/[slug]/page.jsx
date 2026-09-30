import Label from "@/components/common/Label";



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
          </div>
        </div>
      </div>
    </section>
  );
}
