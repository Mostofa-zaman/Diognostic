import Card from "../common/Card";
import ReportChecker from "../common/ReportChecker";

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
