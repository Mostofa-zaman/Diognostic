import React from "react";
import SectionHeading from "../common/SectionHeading";
import PackageCard from "../common/PackageCard";
import { packages } from "../../data/packages";

export default function HealthPackages() {
  return (
       <section className="section-py bg-navy-50/60">
          <div className="container-xl">
            <SectionHeading
              eyebrow="Health Packages"
              title="Preventive checkup packages for every stage of life"
              description="Bundled test packages designed around age, gender and lifestyle needs — at a better value."
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {packages.map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </div>
            
          </div>
        </section>
  );
}