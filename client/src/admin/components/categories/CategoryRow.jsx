import {
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import StatusBadge from "../products/StatusBadge";

const CategoryRow = ({
  category,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-b">

      <td className="p-4">

        <img
          src={
            category.image ||
            "https://placehold.co/70"
          }
          alt={category.name}
          className="w-16 h-16 rounded-lg object-cover"
        />

      </td>

      <td>{category.name}</td>

      <td>

        <StatusBadge
          status={category.isActive}
        />

      </td>

      <td>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(category._id)}
            className="bg-yellow-100 p-2 rounded-lg"
          >
            <FiEdit />
          </button>

          <button
            onClick={() => onDelete(category)}
            className="bg-red-100 p-2 rounded-lg"
          >
            <FiTrash2 />
          </button>

        </div>

      </td>

    </tr>
  );
};

export default CategoryRow;