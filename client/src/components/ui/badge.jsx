const Badge = ({ children }) => {
  return (
    <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
      {children}
    </span>
  );
};

export default Badge;