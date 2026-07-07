import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import ProductBadge from "./ProductBadge";
import Button from "../../../components/ui/Button";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover"
        />

        <ProductBadge text={product.badge} />
      </div>

      <div className="p-6">
        <p className="text-sm text-lime-400">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          {product.name}
        </h3>

        <div className="mt-3 flex">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
        </div>

        <h2 className="mt-4 text-3xl font-bold text-lime-400">
          ₹{product.price}
        </h2>

        <Button className="mt-6 w-full">
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;