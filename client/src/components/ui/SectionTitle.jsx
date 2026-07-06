import Typography from "./Typography";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <Typography variant="h2">{title}</Typography>

      <Typography
        variant="body"
        className="mt-3 text-zinc-400"
      >
        {subtitle}
      </Typography>
    </div>
  );
};

export default SectionTitle;