
"use client";

import { Suspense, useState } from "react";
import Card from "@/components/common/Card";
import AppointmentForm from "./AppointmentForm";
import Icon from "../common/IconProvider";
import Modal from "../common/Modal";
import { CheckCircle2 } from "lucide-react";

const notes = [
  {
    icon: "clock",
    text: "Appointments are typically confirmed within a few hours.",
  },
  {
    icon: "phone",
    text: "Our team may call to verify your preferred time slot.",
  },
  {
    icon: "shield-check",
    text: "Your information is used only to process this request.",
  },
];

export default function AppointmentBookingSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative section-py">
      <div className="container-xl grid gap-10 lg:grid-cols-3">
        <Card className="p-6 md:p-8 lg:col-span-2">
          <Suspense
            fallback={
              <p className="text-sm text-navy-400">Loading form...</p>
            }
          >
            <AppointmentForm onSubmitSuccess={() => setSubmitted(true)} />
          </Suspense>
        </Card>

        <div className="space-y-4">
          {notes.map((n) => (
            <div
              key={n.text}
              className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon name={n.icon} size={18} />
              </span>
              <p className="text-sm text-navy-600">{n.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal open={submitted} onClose={() => setSubmitted(false)}>
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <CheckCircle2 size={30} />
          </span>

          <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
            Appointment Request Submitted Successfully
          </h3>

          <p className="mt-2 text-sm text-navy-500">
            This is a frontend demo — no real booking has been made. Our team
            will typically confirm appointment requests by phone or email.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 w-full rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white hover:bg-teal-800"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}
