import { FiBell, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="h-20 bg-white shadow flex items-center justify-between px-8">

      <h2 className="text-2xl font-bold text-slate-800">

        Dashboard

      </h2>

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="relative">

          <FiSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border outline-none w-72"
          />

        </div>

        {/* Notification */}

        <button className="relative">

          <FiBell size={24} />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Admin */}

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/50"
            alt=""
            className="h-10 w-10 rounded-full"
          />

          <div>

            <h4 className="font-semibold">

              Admin

            </h4>

            <p className="text-sm text-gray-500">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;