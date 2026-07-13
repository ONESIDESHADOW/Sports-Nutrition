import { useNavigate } from "react-router-dom";

import CategoryRow from "./CategoryRow";

const CategoryTable = ({
  categories,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Image
            </th>

            <th>Name</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {categories.length === 0 ? (

            <tr>

              <td
                colSpan={4}
                className="py-10 text-center"
              >
                No Categories Found
              </td>

            </tr>

          ) : (

            categories.map((category) => (

              <CategoryRow
                key={category._id}
                category={category}
                onEdit={(id) =>
                  navigate(`/categories/edit/${id}`)
                }
onDelete={handleDelete}
              />

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default CategoryTable;