
import Link from "next/link";
import { notFound } from "next/navigation";
import { tests, getTestBySlug } from "@/data/tests";
import Button from "@/components/common/Button";
import Label from "@/components/common/Label";
import Card from "@/components/common/Card";
import {
  Droplet,
  Clock,
  FileText,
  ArrowLeft,
} from "lucide-react";

export function generateStaticParams() {
  return tests.map((test) => ({
    slug: test.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    return {
      title: "Test Not Found",
    };
  }

  return {
    title: test.name,
    description: test.description,
  };
}

export default async function TestDetailsPage({ params }) {
  const { slug } = await params;

  const test = getTestBySlug(slug);

  if (!test) {
    notFound();
  }

  const related = tests
    .filter(
      (item) =>
        item.category === test.category &&
        item.slug !== test.slug
    )
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
          {/* Test Details */}
          <div className="lg:col-span-2">
            <Label tone="navy">{test.category}</Label>

            <h1 className="mt-4 font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              {test.name}
            </h1>

            <p className="mt-4 leading-relaxed text-navy-500">
              {test.description}
            </p>

            {/* Why This Test Is Performed */}
            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Why This Test Is Performed
              </h2>

              <p className="mt-2 leading-relaxed text-navy-500">
                {test.why}
              </p>
            </div>

            {/* Preparation */}
            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Preparation
              </h2>

              <p className="mt-2 leading-relaxed text-navy-500">
                {test.preparation}
              </p>
            </div>

            {/* Related Tests */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-xl font-semibold text-navy-900">
                  Related Tests
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/tests/${item.slug}`}
                      className="focus-ring rounded-xl border border-navy-100 bg-white p-4 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Test Information Card */}
          <div>
            <Card className="sticky top-24 p-6">
              <p className="font-mono text-3xl font-semibold text-navy-900">
                {test.price}
              </p>

              <p className="text-xs text-navy-400">
                Price is indicative and may vary
              </p>

              <div className="mt-6 space-y-4 border-t border-navy-100 pt-6 text-sm">
                {/* Sample Type */}
                <div className="flex items-center gap-3">
                  <Droplet
                    size={17}
                    className="text-teal-600"
                  />

                  <div>
                    <p className="text-navy-400">
                      Sample Type
                    </p>

                    <p className="font-medium text-navy-800">
                      {test.sample}
                    </p>
                  </div>
                </div>

                {/* Report Time */}
                <div className="flex items-center gap-3">
                  <Clock
                    size={17}
                    className="text-teal-600"
                  />

                  <div>
                    <p className="text-navy-400">
                      Report Time
                    </p>

                    <p className="font-medium text-navy-800">
                      {test.reportTime}
                    </p>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-center gap-3">
                  <FileText
                    size={17}
                    className="text-teal-600"
                  />

                  <div>
                    <p className="text-navy-400">
                      Category
                    </p>

                    <p className="font-medium text-navy-800">
                      {test.category}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                href={`/appointment?test=${test.slug}`}
                className="mt-6 w-full"
              >
                Book This Test
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
