import Button from "@/components/common/Button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Trained Collection Staff",
  "Safe Sample Handling",
  "Convenient Scheduling",
  "Fast Report Delivery",
];

export default function HomeCollectionPromo() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-teal-700 p-8 md:grid-cols-2 md:p-14">
          <div>
            <span className="eyebrow text-teal-200">Home Sample Collection</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Diagnostic Tests From the Comfort of Your Home
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-teal-200">
                  <CheckCircle2 size={16} className="text-white" /> {f}
                </li>
              ))}
            </ul>
            <Button href="/blood-collection" variant="white" size="lg" className="mt-8">
              Book Home Collection
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop"
              alt="Home sample collection by trained staff"
              className="h-72 w-full rounded-2xl object-cover shadow-cardHover md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
