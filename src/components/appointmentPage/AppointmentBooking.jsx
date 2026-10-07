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
           <div className="space-y-4">
            {notes.map((n) => (
              <div key={n.text} className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon name={n.icon} size={18} />
                </span>
                <p className="text-sm text-navy-600">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
