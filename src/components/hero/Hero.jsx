"use client";

import Button from "@/components/common/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";


const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Diagnostic Tests" },
  { value: "30+", label: "Specialist Doctors" },
  { value: "100K+", label: "Patients Served" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        {/* hero left side */}
        <div className="animate-fadeUp">
          <span className="eyebrow text-teal-400">
            <ShieldCheck size={14} /> Trusted Diagnosis, Better Care
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Advanced Diagnostics.
            <br />
            <span className="text-teal-400">Trusted Healthcare.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-200 md:text-lg">
            Accurate diagnostic services, experienced doctors and modern medical
            technology — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/appointment" variant="primary" size="lg">
              Book an Appointment <ArrowRight size={18} />
            </Button>
            <Button href="/services" variant="white" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-navy-300 md:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
