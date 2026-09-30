
import { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { FileCheck2, Search } from "lucide-react";

export default function ReportChecker() {
    
  const [checked, setChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setChecked(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3">
        <Input
          id="patientId"
          label="Patient ID"
          placeholder="e.g. SADC-0245"
          required
        />
        <Input
          id="reportId"
          label="Report ID"
          placeholder="e.g. RPT-88231"
          required
        />
        <div className="flex items-end">
          <Button type="submit" className="w-full">
            <Search size={16} /> Check Report
          </Button>
        </div>
      </form>
       {checked && (
        <div className="mt-8 rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-600">
                <FileCheck2 size={22} />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-navy-900">
                  Report Ready — Complete Blood Count (CBC)
                </p>
                <p className="text-sm text-navy-500">
                  Demo result. This is not a real medical report.
                </p>
              </div>
            </div>
            </div>
            </div>
               )}
    </div>
  );
}
