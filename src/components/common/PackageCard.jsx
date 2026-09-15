
import Card from "@/components/common/Card";
import Label from "../common/Label";



export default function PackageCard() {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Label tone="teal">dfbh</Label>
          <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
           sujs
          </h3>
          <p className="mt-1 text-sm text-navy-500">jsis Tests Included</p>
        </div>
      </div>
     
    </Card>
  );
}
