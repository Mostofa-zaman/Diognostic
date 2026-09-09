import VitalDivider from "@/components/common/VitalDivider";
import CoreServices from "@/components/home/CoreServices";
import Hero from "@/components/home/hero/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import Departments from "@/components/home/Departments";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickSearch />
      <CoreServices />
      <div className="container-xl">
        <VitalDivider color="#d3ccba" />
      </div>
      <Departments />
    </>
  );
}
