import {
  FiEdit,
  FiTrash2,
  FiEye,
  FiStar,
} from "react-icons/fi";

import StatusBadge from "./StatusBadge";

const ProductRow = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">

      <td className="p-3">
        <img
          src={
            product.images?.[0]?.url ||
            "https://placehold.co/60x60"
          }
          alt={product.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
      </td>

      <td className="p-3 font-medium">
        {product.name}
      </td>

      <td className="p-3">
        {product.category?.name || "-"}
      </td>

      <td className="p-3">
        ₹{product.price}
      </td>

      <td className="p-3">
        {product.stock}
      </td>

      <td className="p-3">

        {product.featured ? (
          <span className="inline-flex items-center gap-1 text-yellow-500">

            <FiStar />

            Featured

          </span>
        ) : (
          "-"
        )}

      </td>

      <td className="p-3">

        <StatusBadge
          status={product.isActive}
        />

      </td>

      <td className="p-3">

        <div className="flex gap-2">

          <button
            className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
          >
            <FiEye />
          </button>

          <button
            onClick={() => onEdit(product._id)}
            className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200"
          >
            <FiEdit />
          </button>

          <button
            onClick={() => onDelete(product)}
            className="p-2 rounded-lg bg-red-100 hover:bg-red-200"
          >
            <FiTrash2 />
          </button>

        </div>

      </td>

    </tr>
  );
};

export default ProductRow;