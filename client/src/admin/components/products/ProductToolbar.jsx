import { FiPlus, FiSearch, FiRefreshCw } from "react-icons/fi";

const ProductToolbar = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  onRefresh,
  onAdd,
  categories = [],
}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full lg:w-80">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Category */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 outline-none"
          >
            <option value="">All Categories</option>

            {categories.map((cat) => (
              <option
                key={cat._id}
                value={cat._id}
              >
                {cat.name}
              </option>
            ))}
          </select>

          {/* Status */}

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 outline-none"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          {/* Refresh */}

          <button
            onClick={onRefresh}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-gray-100"
          >
            <FiRefreshCw />

            Refresh
          </button>

          {/* Add */}

          <button
            onClick={onAdd}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            <FiPlus />

            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductToolbar;