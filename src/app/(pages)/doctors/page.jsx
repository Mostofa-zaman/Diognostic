import DoctorDirectory from "@/components/doctorsPage/DoctorDirectory";
import OurSpecialists from "@/components/doctorsPage/OurSpecialists";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <>
      <OurSpecialists />

      <DoctorDirectory
        doctors={doctors}
        departments={departments}
      />
    </>
  );
}