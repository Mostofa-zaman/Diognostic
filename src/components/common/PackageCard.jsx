
  import Card from "@/components/common/Card";
  import Label from "../common/Label";



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

      
      </Card>
    );
  }
