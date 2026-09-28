import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DoctorDetailsPage() {

 return (

    <section className="section-py">
      <div className="container-xl">
        <Link href="/doctors" className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700">
          <ArrowLeft size={15} /> Back to All Doctors
        </Link>
          </div>
    </section>
 )

}
