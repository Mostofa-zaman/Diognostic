import { Suspense } from "react";
import Card from "@/components/common/Card";
import AppointmentForm from "./AppointmentForm";

const notes = [
  { icon: "clock", text: "Appointments are typically confirmed within a few hours." },
  { icon: "phone", text: "Our team may call to verify your preferred time slot." },
  { icon: "shield-check", text: "Your information is used only to process this request." },
];


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
