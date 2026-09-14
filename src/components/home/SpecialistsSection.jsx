import React from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

export default function SpecialistsSection() {
  return (

    <section className="section-py">
        <div className="container-xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our Specialists"
              title="Meet Our Specialists"
              description="Experienced, qualified consultants dedicated to accurate diagnosis and compassionate care."
            />
            <Button href="/doctors" variant="ghost" className="hidden sm:inline-flex">
              View All Doctors →
            </Button>
          </div>
         
        </div>
      </section>
  )
}

