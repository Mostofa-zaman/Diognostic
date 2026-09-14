import React from 'react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { doctors } from '@/data/doctors'
import DoctorCard from '../common/DoctorCard'

export default function Specialists() {
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
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.slice(0, 4).map((doc) => (
              <DoctorCard key={doc.slug} doctor={doc} />
            ))}
          </div>
        </div>
      </section>
  )
}

