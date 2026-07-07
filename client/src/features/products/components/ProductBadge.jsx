const ProductBadge = ({ text }) => {
  return (
    <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
      {text}
    </span>
  );
};

export default ProductBadge;