const tones = {
  teal: "bg-teal-50 text-teal-700 border-teal-100",
  navy: "bg-navy-50 text-navy-700 border-navy-100",
  gold: "bg-gold-400/10 text-gold-500 border-gold-400/30",
  neutral: "bg-sand-100 text-navy-600 border-sand-200",
};

export default function Label({ children, tone = "teal", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
