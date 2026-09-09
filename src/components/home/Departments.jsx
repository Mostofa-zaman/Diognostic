import { departments } from "@/data/departments";
import SectionHeading from "../common/SectionHeading";
import DepartmentCard from "../common/DepartmentCard";

export default function Departments() {
  return (
    <section className="section-py bg-sand-100/60">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Departments"
          title="Specialized care across 15 departments"
          description="Connect with the right specialist for your specific health concern."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.slice(0, 6).map((d) => (
            <DepartmentCard key={d.slug} department={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
