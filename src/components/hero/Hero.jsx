"use client";

import Button from "@/components/common/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import VitalDivider from "../common/VitalDivider";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Diagnostic Tests" },
  { value: "30+", label: "Specialist Doctors" },
  { value: "100K+", label: "Patients Served" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* full content */}
      <div className="container-xl relative grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        {/* left column */}
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
           {/* right column */}
        <div className="relative animate-fadeUp [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-3xl border border-navy-700 shadow-cardHover">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={image}
                      alt={`Slider image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
              <div className="z-50 absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-cardHover md:left-8 md:right-auto md:w-72">
            <VitalDivider color="#1f9074" className="mb-2" />
            <p className="font-display text-lg font-semibold text-navy-900">
              Report Ready in Hours
            </p>
            <p className="mt-1 text-sm text-navy-500">
              Digital reports delivered fast, with accuracy you can rely on.
            </p>
          </div>
       
        </div>
      </div>
    </section>
  );
}
