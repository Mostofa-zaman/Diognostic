import SectionHeading from "../common/SectionHeading";

export default function OurStory() {
  return (
    <section className="section-py">
        <div className="container-xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Founded on a simple promise" />
            <p className="mt-5 text-navy-500 leading-relaxed">
              S. Alam Digital Diagnostic Center was established with a clear goal: to make
              accurate, timely diagnostics accessible to every patient. What began as a
              single laboratory has grown into a full-service diagnostic center offering
              laboratory testing, imaging, cardiology and specialized diagnostics under
              one roof.
            </p>
            <p className="mt-4 text-navy-500 leading-relaxed">
              Today, our team of specialist doctors, technologists and support staff
              serve thousands of patients each month, backed by modern equipment and a
              genuine commitment to patient-centered care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=700&auto=format&fit=crop"
              alt="Diagnostic center reception"
              className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=500&auto=format&fit=crop"
              alt="Laboratory technician at work"
              className="h-40 w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop"
              alt="Consultant physician"
              className="h-40 w-full rounded-2xl object-cover shadow-card"
            />
          </div>
        </div>
      </section>

)
}
