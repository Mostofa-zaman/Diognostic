export default function Select({ label, id, options = [], className = "", required, placeholder, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-700">
          {label} {required && <span className="text-teal-600">*</span>}
        </label>
      )}
      <select
        id={id}
        required={required}
        className="focus-ring w-full appearance-none rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 transition-colors focus:border-teal-500"
        defaultValue=""
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={typeof opt === "string" ? opt : opt.value} value={typeof opt === "string" ? opt : opt.value}>
            {typeof opt === "string" ? opt : opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
