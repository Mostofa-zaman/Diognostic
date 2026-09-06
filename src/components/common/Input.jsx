export default function Input({ label, id, className = "", required, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-700">
          {label} {required && <span className="text-teal-600">*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-300 transition-colors focus:border-teal-500"
        {...props}
      />
    </div>
  );
}
