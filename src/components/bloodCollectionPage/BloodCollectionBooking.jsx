import SectionHeading from "../common/SectionHeading";
import Card from "@/components/common/Card";
import CollectionForm from "@/components/bloodCollectionPage/CollectionForm";

export default function BloodCollectionBooking() {

  return (
    <>
      <section className="section-py">
        <div className="container-xl">
          <SectionHeading eyebrow="Request a Slot" title="Book blood collection" />
          <Card className="mt-6 p-6 md:p-8">
            <CollectionForm />
          </Card>
        </div>
      </section>
     
    </>
  );
}
