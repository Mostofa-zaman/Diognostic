export default function VitalDivider({ color = "#1f9074", className = "" }) {
  return (
    <div className={`vital-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          className="vital-path animate-pulseDraw"
          d="M0,30 L260,30 L290,30 L308,8 L326,54 L344,30 L372,30 L392,16 L410,44 L428,30 L1200,30"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
