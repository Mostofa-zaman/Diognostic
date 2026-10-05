"use client";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import Button from "@/components/common/Button";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="contactName"
          label="Name"
          placeholder="Your full name"
          required
        />

        <Input
          id="contactPhone"
          label="Phone"
          type="tel"
          placeholder="01XXX-XXXXXX"
          required
        />
      </div>

      <Input
        id="contactEmail"
        label="Email"
        type="email"
        placeholder="you@example.com"
        required
      />

      <Input
        id="contactSubject"
        label="Subject"
        placeholder="How can we help?"
        required
      />

      <Textarea
        id="contactMessage"
        label="Message"
        placeholder="Write your message here..."
        required
        rows={5}
      />

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}