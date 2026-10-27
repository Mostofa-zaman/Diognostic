"use client";

import Button from "@/components/common/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import VitalDivider from "../../common/VitalDivider";

const images = [
  "/images/slider1.jpg",
  "/images/sliderOne.jpg",
  "/images/sliderTwo.jpg",
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

      {/* Main content */}
      <div className="container-xl relative grid grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24 xl:gap-16">
        {/* Left column */}
        <div className="animate-fadeUp min-w-0">
          <span className="eyebrow text-teal-400">
            <ShieldCheck size={14} />
            Trusted Diagnosis, Better Care
          </span>

          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.5rem]">
            Advanced Diagnostics.
            <br />
            <span className="text-teal-400">
              Trusted Healthcare.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-navy-200 sm:mt-6 sm:text-base md:text-lg">
            Accurate diagnostic services, experienced doctors and modern
            medical technology — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button href="/appointment" variant="primary" size="lg">
              Book an Appointment <ArrowRight size={18} />
            </Button>

            <Button href="/services" variant="white" size="lg">
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-12 sm:grid-cols-4 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {s.value}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-navy-300 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Image slider */}
        <div className="relative min-w-0 pb-8 animate-fadeUp [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-2xl border border-navy-700 shadow-cardHover sm:rounded-3xl">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="hero-swiper w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={image}>
                  <div className="relative h-[240px] w-full xs:h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px] xl:h-[500px]">
                    <Image
                      src={image}
                      alt={`Diagnostic center image ${index + 1}`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Image overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-1 left-3 right-3 z-10 rounded-xl bg-white p-4 shadow-cardHover sm:left-6 sm:right-auto sm:w-72 sm:rounded-2xl sm:p-5 md:left-8">
            <VitalDivider color="#1f9074" className="mb-2" />

            <p className="font-display text-base font-semibold text-navy-900 sm:text-lg">
              Report Ready in Hours
            </p>

            <p className="mt-1 text-xs leading-relaxed text-navy-500 sm:text-sm">
              Digital reports delivered fast, with accuracy you can rely on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}