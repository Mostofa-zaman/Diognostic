import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import { useState } from "react";


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
    </>
  )
}