import { serviceGroups } from "@/data/services";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "../common/ServiceCard";

export default function CoreServices() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Core Services"
          title="Comprehensive diagnostic services under one roof"
          description="From routine lab work to advanced imaging, our services are built around accuracy and comfort."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((g) => (
              <ServiceCard key={g.slug} group={g} />
            ))}
          </div>
      
      </div>
    </section>
  );
}