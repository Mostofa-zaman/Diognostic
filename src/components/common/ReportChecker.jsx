export default function ReportChecker() {

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
    </div>
  );
}
