import SectionHeading from "@/components/common/SectionHeading";


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
    <section className="section-py bg-navy-950">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care built on trust and technology"
          description="Every visit is designed around accuracy, comfort and speed, so you can focus on your health, not the process."
          align="center"
          className="mx-auto text-white [&_.eyebrow]:text-teal-400 [&_h2]:text-white [&_p]:text-navy-300"
        />
   
      </div>
    </section>
  );
}
