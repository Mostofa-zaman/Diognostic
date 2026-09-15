
  import Card from "@/components/common/Card";
  import Label from "../common/Label";
import { CheckCircle2 } from "lucide-react";



  export default function PackageCard({pkg}) {
    return (
      <Card className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Label tone="teal">{pkg.audience}</Label>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
              {pkg.name}
            </h3>
            <p className="mt-1 text-sm text-navy-500">{pkg.testCount} Tests Included</p>
          </div>
        </div>
        
      <ul className="mt-4 space-y-2">
        {pkg.tests.slice(0, 5).map((t) => (
          <li key={t} className="flex items-start gap-2 text-sm text-navy-600">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-teal-600" />
            {t}
          </li>
        ))}
        {pkg.tests.length > 5 && (
          <li className="text-sm font-medium text-teal-700">
            +{pkg.tests.length - 5} more tests
          </li>
        )}
      </ul>

      
      </Card>
    );
  }
