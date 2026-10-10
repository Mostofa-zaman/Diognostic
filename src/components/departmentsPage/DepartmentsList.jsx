import { departments } from "@/data/departments";
import SectionHeading from "../common/SectionHeading";
import DepartmentCard from "../common/DepartmentCard";

export default function DepartmentsList() {
  return (
 
      <section className="section-py">
        <div className="container-xl">
          <SectionHeading
            eyebrow="All Departments"
            title="15 departments, one trusted center"
            description="Browse departments to view specialist doctors and related diagnostic services."
          />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <DepartmentCard key={d.slug} department={d} />
            ))}
          </div>
       
        </div>
      </section>
  );
}
