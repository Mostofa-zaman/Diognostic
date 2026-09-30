

export default function PackageDetailsPage() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <Link
          href="/packages"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700"
        >
          <ArrowLeft size={15} /> Back to Packages
        </Link>
      </div>
    </section>
  );
}
