import {
  FiPlus,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";

const OfferToolbar = ({
  search,
  setSearch,
  status,
  setStatus,
  onRefresh,
  onAdd,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">

      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <div className="relative w-full lg:w-80">

          <FiSearch className="absolute left-3 top-4 text-gray-400"/>

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search offer..."
            className="w-full border rounded-xl pl-10 pr-4 py-3"
          />

        </div>

        <div className="flex gap-3">

          <select
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <button
            onClick={onRefresh}
            className="border rounded-xl px-5 py-3 flex items-center gap-2"
          >
            <FiRefreshCw />
            Refresh
          </button>

          <button
            onClick={onAdd}
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-5 py-3 flex items-center gap-2"
          >
            <FiPlus />
            Add Offer
          </button>

        </div>

      </div>

    </div>
  );
};

export default OfferToolbar;