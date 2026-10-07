import SectionHeading from "../common/SectionHeading";
import SerialWidget from "./SerialWidget";


export default function SerialInfo() {
  return (
       <section className="section-py">
        <div className="container-xl">
          <SectionHeading eyebrow="Live Queue" title="Center Collection Serial" />
          <div className="mt-6">
            <SerialWidget />
          </div>
        </div>
      </section>
  );
}
