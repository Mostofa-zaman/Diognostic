import VitalDivider from "@/components/common/VitalDivider";
import CoreServices from "@/components/home/CoreServices";
import Hero from "@/components/home/hero/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import Departments from "@/components/home/Departments";
import Specialists from "@/components/home/Specialists";
import HealthPackages from "@/components/home/HealthPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeCollectionPromo from "@/components/home/HomeCollectionPromo";
import HealthTips from "@/components/home/HealthTips";
import AppointmentCTA from "@/components/home/AppointmentCTA";

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
      <Specialists/>
      <HealthPackages/>
      <WhyChooseUs/>
      <HomeCollectionPromo/> 
      <HealthTips/>
      <AppointmentCTA/>
    </>
  );
}
