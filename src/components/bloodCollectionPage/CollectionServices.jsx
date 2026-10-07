
import SectionHeading from "../common/SectionHeading";
import Icon from "../common/IconProvider";

const services = [
  { icon: "home", title: "Home Blood Collection", text: "Trained staff visit your home at your preferred time." },
  { icon: "building", title: "Center-based Collection", text: "Walk in and get your sample collected at the center." },
  { icon: "clock", title: "Priority Collection", text: "Faster, priority-queue sample collection for urgent needs." },
];

export default function CollectionServices() {
  return (
    <section className="section-py bg-sand-100/60">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Collection Services"
          title="Choose your collection type"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-navy-100 bg-white p-6 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon name={s.icon} size={20} />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-navy-500">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
