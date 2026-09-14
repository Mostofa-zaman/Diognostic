export default function PackageCard({ pkg }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Badge tone="teal">{pkg.audience}</Badge>
          <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
            {pkg.name}
          </h3>
          <p className="mt-1 text-sm text-navy-500">
            {pkg.testCount} Tests Included
          </p>
        </div>
      </div>
    </Card>
  );
}
