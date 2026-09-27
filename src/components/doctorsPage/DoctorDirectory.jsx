"use client";

import { useMemo, useState } from "react";
import DoctorCard from "@/components/doctors/DoctorCard";

export default function DoctorDirectory({ doctors, departments }) {
  const [dept, setDept] = useState("All");

  const filtered = useMemo(() => {
    if (dept === "All") return doctors;
    return doctors.filter((d) => d.department === dept);
  }, [doctors, dept]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setDept("All")}
          className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
            dept === "All" ? "bg-teal-600 text-white" : "bg-sand-100 text-navy-600 hover:bg-sand-200"
          }`}
        >
          All Specialists
        </button>
        {departments.map((d) => (
          <button
            key={d.slug}
            onClick={() => setDept(d.slug)}
            className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              dept === d.slug ? "bg-teal-600 text-white" : "bg-sand-100 text-navy-600 hover:bg-sand-200"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-navy-400">{filtered.length} doctors found</p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doc) => (
          <DoctorCard key={doc.slug} doctor={doc} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-navy-400">
            No doctors found in this department yet.
          </p>
        )}
      </div>
    </div>
  );
}
