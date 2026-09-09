"use client";

import React, { useState } from 'react'

import { Search, FlaskConical, Stethoscope, Building2, PackageSearch } from "lucide-react";



const tabs = [
  { key: "tests", label: "Diagnostic Tests", icon: FlaskConical, href: "/tests" },
  { key: "doctors", label: "Doctors", icon: Stethoscope, href: "/doctors" },
  { key: "departments", label: "Departments", icon: Building2, href: "/departments" },
  { key: "packages", label: "Health Packages", icon: PackageSearch, href: "/packages" },
];


export default function QuickSearch() {
    const [active, setActive] = useState("tests");
  return (
    <section className="relative z-10 -mt-10 md:-mt-14">
      <div className="container-xl">
        <div className="rounded-2xl border border-navy-100 bg-white p-4 shadow-cardHover md:p-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const TabIcon = t.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`focus-ring flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === t.key
                      ? "bg-teal-600 text-white"
                      : "bg-sand-100 text-navy-600 hover:bg-sand-200"
                  }`}
                >
                  <TabIcon size={15} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

