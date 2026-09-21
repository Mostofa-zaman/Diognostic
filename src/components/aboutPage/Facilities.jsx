import SectionHeading from "../common/SectionHeading";

const facilities = [
  { title: "Modern Laboratory", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=700&auto=format&fit=crop" },
  { title: "Digital X-Ray", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=700&auto=format&fit=crop" },
  { title: "CT Scan", img: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?q=80&w=700&auto=format&fit=crop" },
  { title: "MRI", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=700&auto=format&fit=crop" },
  { title: "Ultrasound", img: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=700&auto=format&fit=crop" },
  { title: "Sample Collection", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=700&auto=format&fit=crop" },
];

export default function Facilities() {
  return (
  
    <section className="section-py bg-sand-100/60">
        <div className="container-xl">
          <SectionHeading eyebrow="Facilities" title="Modern facilities for reliable diagnosis" align="center" className="mx-auto" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="group relative overflow-hidden rounded-2xl shadow-card">
                <img src={f.img} alt={f.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-base font-semibold text-white">
                  {f.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

)
}
