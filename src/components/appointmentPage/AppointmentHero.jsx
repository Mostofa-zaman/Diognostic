export default function AppointmentHero() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-center md:py-20">
        <div className="container-xl">
          <span className="eyebrow text-teal-400">Book Appointment</span>

          <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-white md:text-5xl">
            Schedule your visit
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-navy-300">
            Choose your preferred department, doctor, date and time to request an appointment.
          </p>
        </div>
      </section>
    </>
  );
}