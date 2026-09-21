


export default function ExperienceCard() {
  return (
   <section className="section-py">
        <div className="container-xl">
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-navy-900 p-10 text-center sm:grid-cols-4 md:p-14">
            {[
              ["15+", "Years of Experience"],
              ["50+", "Diagnostic Tests"],
              ["30+", "Specialist Doctors"],
              ["100K+", "Patients Served"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-sm text-navy-300">{label}</p>
              </div>
            ))}
          </div>
       
        </div>
      </section>
  )
}
