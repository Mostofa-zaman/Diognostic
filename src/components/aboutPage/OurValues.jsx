import SectionHeading from "../common/SectionHeading";

const values = [
  { title: "Accuracy", text: "Every result is verified through standardized quality protocols." },
  { title: "Compassion", text: "Patients are treated with respect, dignity and clear communication." },
  { title: "Integrity", text: "Transparent pricing and honest reporting, always." },
  { title: "Innovation", text: "Continual investment in modern diagnostic technology." },
];


export default function OurValues() {
  return (
  
      <section className="section-py">
        <div className="container-xl">
          <SectionHeading eyebrow="Our Values" title="What guides our work" align="center" className="mx-auto" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-navy-100 p-6 text-center">
                <h4 className="font-display text-lg font-semibold text-navy-900">{v.title}</h4>
                <p className="mt-2 text-sm text-navy-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

)
}
