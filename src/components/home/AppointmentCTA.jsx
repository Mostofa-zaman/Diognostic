import Button from "../common/Button";


export default function AppointmentCTA() {
  return (
      <section className="section-py">
        <div className="container-xl">
          <div className="rounded-3xl bg-navy-900 px-8 py-14 text-center md:px-16">
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Ready to take the next step in your health?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-300">
              Book an appointment or a diagnostic test today and experience trusted,
              technology-driven care.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/appointment" variant="primary" size="lg">
                Book an Appointment
              </Button>
              <Button href="/tests" variant="white" size="lg">
                Browse Diagnostic Tests
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}
