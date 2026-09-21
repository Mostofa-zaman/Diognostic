import Card from "../common/Card";
import Icon from "../common/IconProvider";


export default function OurMission() {
  return (
  
     <section className="section-py bg-sand-100/60">
        <div className="container-xl grid gap-6 md:grid-cols-3">
          <Card className="p-8">
            <Icon name="award" className="text-teal-600" size={26} />
            <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-500">
              To deliver accurate, timely and affordable diagnostic services that
              empower patients and physicians to make informed health decisions.
            </p>
          </Card>
          <Card className="p-8">
            <Icon name="scan" className="text-teal-600" size={26} />
            <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-500">
              To be Bangladesh's most trusted diagnostic partner, recognized for
              precision, technology and patient care.
            </p>
          </Card>
          <Card className="p-8">
            <Icon name="shield-check" className="text-teal-600" size={26} />
            <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
              Quality Commitment
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-500">
              Standardized testing protocols and continuous staff training ensure
              consistent, dependable results for every patient.
            </p>
          </Card>
        </div>
      </section>

)
}
