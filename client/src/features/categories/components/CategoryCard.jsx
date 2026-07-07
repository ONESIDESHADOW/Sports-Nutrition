import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-lg transition-all hover:border-lime-400"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {category.name}
        </h3>

        <p className="mt-2 text-zinc-400">
          {category.totalProducts} Products
        </p>

        <button
          className="mt-6 flex items-center gap-2 font-semibold text-lime-400 transition group-hover:gap-4"
        >
          Explore
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default CategoryCard;