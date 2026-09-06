export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-navy-500 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
