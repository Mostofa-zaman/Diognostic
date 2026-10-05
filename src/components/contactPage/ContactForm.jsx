"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import Button from "@/components/common/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          Message Sent Successfully
        </h3>
        <p className="mt-2 max-w-sm text-sm text-navy-500">
          This is a frontend demo — no message has actually been sent. Our team
          typically replies within one business day.
        </p>
        <Button onClick={() => setSent(false)} variant="outline" className="mt-6">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="contactName" label="Name" placeholder="Your full name" required />
        <Input id="contactPhone" label="Phone" type="tel" placeholder="01XXX-XXXXXX" required />
      </div>
      <Input id="contactEmail" label="Email" type="email" placeholder="you@example.com" required />
      <Input id="contactSubject" label="Subject" placeholder="How can we help?" required />
      <Textarea id="contactMessage" label="Message" placeholder="Write your message here..." required rows={5} />
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
