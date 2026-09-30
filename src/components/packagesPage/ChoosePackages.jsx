import { packages } from "@/data/packages";
import PackageCard from "../common/PackageCard";
import SectionHeading from "../common/SectionHeading";


export default function ChoosePackages() {
  return (
      <section className="section-py">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Choose a Package"
            title="Comprehensive screening, at a better value"
            description="Each package groups the most relevant tests for a specific life stage into a single convenient visit."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        </div>
      </section>
  )
}
