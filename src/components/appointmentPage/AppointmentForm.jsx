"use client"

import { departments } from "@/data/departments";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { doctors } from "@/data/doctors";
import { CheckCircle2 } from "lucide-react";

export default function AppointmentForm() {

   const searchParams = useSearchParams();
    const [submitted, setSubmitted] = useState(false);
    const [department, setDepartment] = useState("");

    const filteredDoctors = department
      ? doctors.filter((d) => d.department === department)
      : doctors;
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Input id="name" label="Patient Name" placeholder="e.g. Rahim Uddin" required />
            <Input id="phone" label="Phone Number" type="tel" placeholder="01XXX-XXXXXX" required />
          </div>
          <Input id="email" label="Email" type="email" placeholder="you@example.com" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Select
              id="department"
              label="Select Department"
              placeholder="Choose a department"
              required
              onChange={(e) => setDepartment(e.target.value)}
              options={departments.map((d) => ({ value: d.slug, label: d.name }))}
            />
            <Select
              id="doctor"
              label="Select Doctor"
              placeholder="Choose a doctor"
              defaultValue={searchParams.get("doctor") || ""}
              options={filteredDoctors.map((d) => ({ value: d.slug, label: d.name }))}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input id="date" label="Select Date" type="date" required />
            <Input id="time" label="Select Time" type="time" required />
          </div>
          <Select
            id="type"
            label="Consultation Type"
            placeholder="Choose consultation type"
            required
            options={["In-Person Visit", "Video Consultation", "Follow-up Visit"]}
          />
            <Textarea id="message" label="Message" placeholder="Briefly describe your concern (optional)" />

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Confirm Appointment
          </Button>
        </form>
          <Modal open={submitted} onClose={() => setSubmitted(false)}>
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <CheckCircle2 size={30} />
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
              Appointment Request Submitted Successfully
            </h3>
            <p className="mt-2 text-sm text-navy-500">
              This is a frontend demo — no real booking has been made. Our team will
              typically confirm appointment requests by phone or email.
            </p>
            <Button onClick={() => setSubmitted(false)} className="mt-6 w-full">
              Close
            </Button>
          </div>
        </Modal>
    </>
  );
}
