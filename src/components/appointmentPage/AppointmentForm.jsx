export default function AppointmentForm() {
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            id="name"
            label="Patient Name"
            placeholder="e.g. Rahim Uddin"
            required
          />
          <Input
            id="phone"
            label="Phone Number"
            type="tel"
            placeholder="01XXX-XXXXXX"
            required
          />
        </div>
      </form>
    </>
  );
}
