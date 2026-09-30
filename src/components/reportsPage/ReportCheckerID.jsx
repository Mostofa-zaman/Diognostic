import Card from "@/components/common/Card";
import Icon from "@/components/common/IconProvider";
import ReportChecker from "../common/ReportChecker";



const steps = [
  { icon: "search", title: "Enter Details", text: "Provide your Patient ID and Report ID exactly as given at collection." },
  { icon: "clock", title: "Instant Status", text: "See whether your report is still processing or ready for download." },
  { icon: "file-check", title: "Download", text: "Download a digital copy of your report once it's ready." },
];

export default function ReportCheckerID() {
  return (
    <>
      

      <section className="section-py">
        <div className="container-xl">
          <Card className="mx-auto max-w-3xl p-6 md:p-8">
            <ReportChecker />
          </Card>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon name={s.icon} size={20} />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-1 text-sm text-navy-500">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
