
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
export default function TestDetailsPage({ params }) {
 
  return (
    <section className="section-py">
      <div className="container-xl">
        <Link href="/tests" className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700">
          <ArrowLeft size={15} /> Back to All Tests
        </Link>
            <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Label tone="navy">{test.category}</Label>
            <h1 className="m
            t-4 font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              {test.name}
            </h1>
            <p className="mt-4 text-navy-500 leading-relaxed">{test.description}</p>

           
      
      </div>
      </div>
      </div>
    </section>
  )
}