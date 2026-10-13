"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import TestCard from "./TestCard";

export default function TestDirectory({ tests, categories }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return tests.filter((t) => {
      const matchesCategory = category === "All" || t.category === category;
      const matchesQuery = t.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [tests, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-300" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search diagnostic tests..."
            className="focus-ring w-full rounded-xl border border-navy-200 bg-white py-2.5 pl-11 pr-4 text-sm text-navy-900 placeholder:text-navy-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                category === c
                  ? "bg-teal-600 text-white"
                  : "bg-sand-100 text-navy-600 hover:bg-sand-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-navy-400">{filtered.length} tests found</p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TestCard key={t.slug} test={t} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-navy-400">
            No tests match your search. Try a different keyword or category.
          </p>
        )}
      </div>
    </div>
  );
}
