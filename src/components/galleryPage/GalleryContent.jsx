import SectionHeading from "../common/SectionHeading";
import GalleryGrid from "./GalleryGrid";

export default function GalleryContent() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Facilities and people behind your care"
        />
        <div className="mt-10">
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </section>
  );
}
