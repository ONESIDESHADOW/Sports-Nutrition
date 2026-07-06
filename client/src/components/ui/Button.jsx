import clsx from "clsx";

const variants = {
  primary:
    "bg-lime-400 text-black hover:bg-lime-300",
  secondary:
    "bg-yellow-400 text-black hover:bg-yellow-300",
  outline:
    "border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black",
  ghost:
    "text-white hover:bg-zinc-800",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded-xl font-semibold transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;