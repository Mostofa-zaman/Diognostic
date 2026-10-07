import Card from "@/components/common/Card";

export default function SerialWidget() {
  return (
    <Card className="grid grid-cols-3 divide-x divide-navy-100 p-0 text-center">
      <div className="p-6">
        <p className="font-mono text-3xl font-semibold text-teal-700 md:text-4xl">24</p>
        <p className="mt-1 text-xs text-navy-500 md:text-sm">Current Serial</p>
      </div>
      <div className="p-6">
        <p className="font-mono text-3xl font-semibold text-navy-900 md:text-4xl">21</p>
        <p className="mt-1 text-xs text-navy-500 md:text-sm">Now Serving</p>
      </div>
      <div className="p-6">
        <p className="font-mono text-3xl font-semibold text-navy-900 md:text-4xl">~15m</p>
        <p className="mt-1 text-xs text-navy-500 md:text-sm">Estimated Wait</p>
      </div>
    </Card>
  );
}
