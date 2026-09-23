import OurService from "@/components/servicePage/OurService";
import ServiceGroups from "@/components/servicePage/ServiceGroups";

export const metadata = {
  title: "Services",
  description:
    "Explore laboratory tests, imaging & radiology, cardiology and specialized diagnostics offered at S. Alam Digital Diagnostic Center.",
};

export default function ServicesPage() {
  return (
   <>
   <OurService/>
   <ServiceGroups/>
   </>

  )
}
