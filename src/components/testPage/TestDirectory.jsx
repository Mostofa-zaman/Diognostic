"use client";

import {  useState } from "react";
import { Search } from "lucide-react";

export default function TestDirectory() {
  const [query, setQuery] = useState("");

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
      
      </div>

    </div>
  );
}
