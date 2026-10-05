import Card from "@/components/common/Card";
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

       <section className="section-py">
        <div className="container-xl grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {info.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{item.title}</p>
                  <p className="mt-0.5 text-sm text-navy-500">{item.text}</p>
                </div>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-navy-100">
              <div className="flex h-48 w-full items-center justify-center bg-sand-100 text-sm text-navy-400">
                Google Map Placeholder
              </div>
            </div>
             </div>
            <Card className="p-6 md:p-8 lg:col-span-2">
            <h2 className="font-display text-xl font-semibold text-navy-900">Send Us a Message</h2>
            <p className="mt-1 text-sm text-navy-500">
              Fill out the form and our team will get back to you.
            </p>
             </Card>

             </div>
      </section>

     
    </>
  );
}
