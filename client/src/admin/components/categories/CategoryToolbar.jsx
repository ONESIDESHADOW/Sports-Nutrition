import { FiPlus, FiRefreshCw, FiSearch } from "react-icons/fi";

const CategoryToolbar = ({
  search,
  setSearch,
  status,
  setStatus,
  onRefresh,
  onAdd,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-6">

      <div className="flex flex-col lg:flex-row gap-4 justify-between">

        <div className="relative w-full lg:w-80">

          <FiSearch className="absolute left-3 top-4 text-gray-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search category..."
            className="w-full pl-10 pr-4 py-3 border rounded-xl"
          />

        </div>

        <div className="flex gap-3">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-3 border rounded-xl"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <button
            onClick={onRefresh}
            className="px-5 py-3 border rounded-xl flex items-center gap-2"
          >
            <FiRefreshCw />

            Refresh
          </button>

          <button
            onClick={onAdd}
            className="px-5 py-3 bg-green-600 text-white rounded-xl flex items-center gap-2"
          >
            <FiPlus />

            Add Category
          </button>

        </div>

      </div>

    </div>
  );
};

export default CategoryToolbar;