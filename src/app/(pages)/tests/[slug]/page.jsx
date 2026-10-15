import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import Label from "@/components/common/Label";
import { getTestBySlug, tests } from "@/data/tests";
import { notFound } from "next/navigation";

export default async function TestDetailsPage({ params }) {
    const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) notFound();

  const related = tests
    .filter((t) => t.category === test.category && t.slug !== test.slug)
    .slice(0, 3);

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
              {related.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-xl font-semibold text-navy-900">Related Tests</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/tests/${r.slug}`}
                      className="focus-ring rounded-xl border border-navy-100 bg-white p-4 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-700"
                    >
                      {r.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
      </div>
        <div>
            <Card className="sticky top-24 p-6">
              <p className="font-mono text-3xl font-semibold text-navy-900">{test.price}</p>
              <p className="text-xs text-navy-400">Price is indicative and may vary</p>

              <div className="mt-6 space-y-4 border-t border-navy-100 pt-6 text-sm">
                <div className="flex items-center gap-3">
                  <Droplet size={17} className="text-teal-600" />
                  <div>
                    <p className="text-navy-400">Sample Type</p>
                    <p className="font-medium text-navy-800">{test.sample}</p>
                  </div>
                </div>
                </div>
                 </Card>
                </div>
      </div>
      </div>
    </section>
  );
}
