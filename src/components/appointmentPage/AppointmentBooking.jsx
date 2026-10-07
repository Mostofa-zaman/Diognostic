import { Suspense } from "react";
import Card from "@/components/common/Card";
import AppointmentForm from "./AppointmentForm";
export default function AppointmentBookingSection() {
  return (
    <>
      <section className="section-py">
        <div className="container-xl grid gap-10 lg:grid-cols-3">
          <Card className="p-6 md:p-8 lg:col-span-2">
            <Suspense
              fallback={<p className="text-sm text-navy-400">Loading form...</p> }>
                <AppointmentForm/>
            </Suspense>
          </Card>
        </div>
      </section>
    </>
  );
}
