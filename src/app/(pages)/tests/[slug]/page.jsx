import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import Label from "@/components/common/Label";

export default async function TestDetailsPage() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <Link
          href="/tests"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700"
        >
          <ArrowLeft size={15} />
          Back to All Tests
        </Link>
           <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Label tone="navy">{test.category}</Label>
            <h1 className="mt-4 font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              {test.name}
            </h1>
            <p className="mt-4 text-navy-500 leading-relaxed">{test.description}</p>
            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Why This Test Is Performed
              </h2>
              <p className="mt-2 text-navy-500 leading-relaxed">{test.why}</p>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">Preparation</h2>
              <p className="mt-2 text-navy-500 leading-relaxed">{test.preparation}</p>
            </div>
      </div>
      </div>
      </div>
    </section>
  );
}
