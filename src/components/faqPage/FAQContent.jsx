import { faqs } from "@/data/faqs";
import SectionHeading from "../common/SectionHeading";
import FaqAccordion from "./FaqAccordion";
import Button from "@/components/common/Button";


export default function FaqContent() {
  return (
          <section className="section-py">
        <div className="container-xl max-w-3xl">
          <SectionHeading eyebrow="Help Center" title="Common questions from our patients" />
          <div className="mt-8">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="mt-10 rounded-2xl bg-sand-100/70 p-6 text-center">
            <p className="text-navy-600">Still have questions?</p>
            <Button href="/contact" className="mt-4">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      )
      }