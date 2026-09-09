"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, FlaskConical, Stethoscope, Building2, PackageSearch } from "lucide-react";

const tabs = [
  { key: "tests", label: "Diagnostic Tests", icon: FlaskConical, href: "/tests" },
  { key: "doctors", label: "Doctors", icon: Stethoscope, href: "/doctors" },
  { key: "departments", label: "Departments", icon: Building2, href: "/departments" },
  { key: "packages", label: "Health Packages", icon: PackageSearch, href: "/packages" },
];

export default function QuickSearch() {
  const [active, setActive] = useState("tests");
  const [query, setQuery] = useState("");
  const router = useRouter();
  const activeTab = tabs.find((t) => t.key === active);

  function handleSubmit(e) {
    e.preventDefault();
    router.push(activeTab.href);
  }

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
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-300"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a test, doctor or service..."
                className="focus-ring w-full rounded-xl border border-navy-200 bg-sand-50 py-3.5 pl-11 pr-4 text-sm text-navy-900 placeholder:text-navy-400"
              />
            </div>
            <button
              type="submit"
              className="focus-ring rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
