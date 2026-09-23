import { serviceGroups } from "@/data/services";
import Icon from "../common/IconProvider";

export default function ServiceGroups() {
  return (
     <section className="section-py space-y-16">
        <div className="container-xl">
          {serviceGroups.map((group) => (
            <div key={group.slug} id={group.slug} className="scroll-mt-24 border-b border-navy-100 pb-16 last:border-0">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <Icon name={group.icon} size={26} />
                  </span>
                   </div>
            </div>
            </div>
          ))}
        </div>
      </section>
  )
}