import clsx from "clsx";

const variants = {
  h1: "text-5xl md:text-6xl font-bold font-heading",
  h2: "text-4xl md:text-5xl font-bold font-heading",
  h3: "text-3xl font-semibold font-subheading",
  h4: "text-2xl font-semibold font-subheading",
  h5: "text-xl font-semibold font-subheading",
  body: "text-base font-body",
  small: "text-sm font-body text-zinc-400",
};

const Typography = ({
  as: Component = "p",
  variant = "body",
  className,
  children,
}) => {
  return (
    <Component className={clsx(variants[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;