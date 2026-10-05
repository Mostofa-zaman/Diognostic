
import { MapPin, Phone, Mail, Clock, PhoneCall } from "lucide-react";

const info = [
  { icon: MapPin, title: "Address", text: "House 14, Road 7, Gulshan-2, Dhaka 1212, Bangladesh" },
  { icon: Phone, title: "Phone", text: "01711-000000" },
  { icon: Mail, title: "Email", text: "care@salamdiagnostic.com.bd" },
  { icon: Clock, title: "Opening Hours", text: "Saturday – Thursday, 8:00 AM – 10:00 PM" },
  { icon: PhoneCall, title: "Emergency Hotline", text: "16263 (24/7)" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-center md:py-20">
        <div className="container-xl">
          <span className="eyebrow text-teal-400">Contact Us</span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-white md:text-5xl">
            We're here to help
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-navy-300">
            Reach out with questions about appointments, tests or reports.
          </p>
        </div>
      </section>

     
    </>
  );
}
