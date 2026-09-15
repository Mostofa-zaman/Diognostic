import SectionHeading from "@/components/common/SectionHeading";
import Icon from "@/components/common/IconProvider";

const points = [
  { icon: "scan", title: "Advanced Diagnostic Technology", text: "Modern imaging and lab equipment for precise results." },
  { icon: "stethoscope", title: "Experienced Specialists", text: "30+ consultants across major medical departments." },
  { icon: "shield-check", title: "Accurate Testing", text: "Standardized protocols to ensure dependable reports." },
  { icon: "sparkles", title: "Hygienic Environment", text: "Clean, sanitized facilities across the entire center." },
  { icon: "clock", title: "Fast Report Delivery", text: "Most reports delivered digitally within hours." },
  { icon: "users", title: "Patient-Centered Care", text: "Friendly staff focused on comfort and clarity." },
  { icon: "file-check", title: "Digital Report Access", text: "Check and download your reports online, anytime." },
  { icon: "home", title: "Home Sample Collection", text: "Trained phlebotomists available at your doorstep." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-navy-900">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care built on trust and technology"
          description="Every visit is designed around accuracy, comfort and speed, so you can focus on your health, not the process."
          align="center"
          className="mx-auto text-white [&_.eyebrow]:text-teal-400 [&_h2]:text-white [&_p]:text-navy-300"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-navy-800 bg-navy-800/60 p-6 transition-colors hover:border-teal-600/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/15 text-teal-400">
                <Icon name={p.icon} size={20} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-400">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
