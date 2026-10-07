"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";

export default function CollectionForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Select
          id="collectionType"
          label="Collection Type"
          placeholder="Choose collection type"
          required
          options={["Home Blood Collection", "Center-based Blood Collection", "Priority Collection"]}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <Input id="date" label="Preferred Date" type="date" required />
          <Input id="time" label="Preferred Time" type="time" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Input id="patientName" label="Patient Name" placeholder="e.g. Sultana Begum" required />
          <Input id="phone" label="Phone Number" type="tel" placeholder="01XXX-XXXXXX" required />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Request Serial
        </Button>
      </form>

      <Modal open={submitted} onClose={() => setSubmitted(false)}>
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <CheckCircle2 size={30} />
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
            Serial Request Submitted
          </h3>
          <p className="mt-2 text-sm text-navy-500">
            This is a frontend demo — no real serial has been reserved. Our staff will
            typically confirm your collection slot by phone.
          </p>
          <Button onClick={() => setSubmitted(false)} className="mt-6 w-full">
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
