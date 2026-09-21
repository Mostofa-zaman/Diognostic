import AboutUs from "@/components/aboutPage/AboutUs";
import Facilities from "@/components/aboutPage/Facilities";
import OurMission from "@/components/aboutPage/OurMission";
import OurStory from "@/components/aboutPage/OurStory";
import OurValues from "@/components/aboutPage/OurValues";

export const metadata = {
  title: "About Us",
  description:
    "Learn about S. Alam Digital Diagnostic Center's story, mission, vision and commitment to quality diagnostic care.",
};

     
export default function AboutPage() {
  return (
    <>
    <AboutUs/>
    <OurStory/>
    <OurMission/>
    <OurValues/>
    <Facilities/>
    </>
  )
}