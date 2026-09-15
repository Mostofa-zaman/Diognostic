import SectionHeading from "@/components/common/SectionHeading";


export default function WhyChooseUs() {
  return (
    <section className="section-py bg-navy-950">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care built on trust and technology"
          description="Every visit is designed around accuracy, comfort and speed, so you can focus on your health, not the process."
          align="center"
          className="mx-auto text-white [&_.eyebrow]:text-teal-400 [&_h2]:text-white [&_p]:text-navy-300"
        />
   
      </div>
    </section>
  );
}
