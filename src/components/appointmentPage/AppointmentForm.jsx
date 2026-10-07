import { departments } from "@/data/departments";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import Button from "../common/Button";

export default function AppointmentForm() {


    const [department, setDepartment] = useState("");

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
    </>
  );
}
