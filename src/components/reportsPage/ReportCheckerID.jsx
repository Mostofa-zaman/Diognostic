import Card from "../common/Card";
import ReportChecker from "../common/ReportChecker";

const steps = [
  { icon: "search", title: "Enter Details", text: "Provide your Patient ID and Report ID exactly as given at collection." },
  { icon: "clock", title: "Instant Status", text: "See whether your report is still processing or ready for download." },
  { icon: "file-check", title: "Download", text: "Download a digital copy of your report once it's ready." },
];


export default function ReportsPage() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <Card className="mx-auto max-w-3xl p-6 md:p-8">
         <ReportChecker/>
        </Card>
      </div>

    </section>
  );
}
