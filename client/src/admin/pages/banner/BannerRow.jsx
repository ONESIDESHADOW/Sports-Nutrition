import { FiEdit, FiTrash2 } from "react-icons/fi";
import StatusBadge from "../products/StatusBadge";

const BannerRow = ({
  banner,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">

        <img
          src={banner.image}
          alt={banner.title}
          className="w-28 h-16 rounded-lg object-cover border"
        />

      </td>

      <td className="font-semibold">
        {banner.title}
      </td>

      <td className="max-w-xs truncate">
        {banner.subtitle}
      </td>

      <td>
        {banner.order}
      </td>

      <td>

        <StatusBadge
          status={banner.isActive}
        />

      </td>

      <td>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(banner._id)}
            className="bg-yellow-100 hover:bg-yellow-200 p-2 rounded-lg"
          >
            <FiEdit />
          </button>

          <button
            onClick={() => onDelete(banner)}
            className="bg-red-100 hover:bg-red-200 p-2 rounded-lg"
          >
            <FiTrash2 />
          </button>

        </div>

      </td>

    </tr>
  );
};

export default BannerRow;