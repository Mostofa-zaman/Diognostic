import Link from "next/link";

const variants = {
  primary:
    "bg-teal-600 text-white hover:bg-teal-700 shadow-card hover:shadow-cardHover",
  secondary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-card hover:shadow-cardHover",
  outline:
    "border border-navy-200 text-navy-800 hover:border-teal-600 hover:text-teal-700 bg-white",
  ghost: "text-navy-700 hover:text-teal-700 hover:bg-navy-50",
  white: "bg-white text-navy-800 hover:bg-sand-100 shadow-card",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
