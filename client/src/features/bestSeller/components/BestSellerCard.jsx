import { FaStar } from "react-icons/fa";
import Button from "../../../components/ui/Button";

const BestSellerCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover"
        />

        <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-4 py-1 text-xs font-bold text-black">
          {product.badge}
        </span>

      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold text-white">
          {product.name}
        </h3>

        <div className="mt-4 flex">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400"
              />
            ))}
        </div>

        <h2 className="mt-4 text-3xl font-bold text-lime-400">
          ₹{product.price}
        </h2>

        <Button className="mt-6 w-full">
          View Details
        </Button>

      </div>

    </div>
  );
};

export default BestSellerCard;