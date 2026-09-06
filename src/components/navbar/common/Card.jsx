export default function Card({ children, className = "", hover = true, as: Tag = "div", ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-navy-100 bg-white shadow-card ${
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
