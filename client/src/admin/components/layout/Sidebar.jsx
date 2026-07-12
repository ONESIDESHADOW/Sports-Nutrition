import { NavLink } from "react-router-dom";
import sidebarMenu from "../../../constants/sidebarMenu";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-72 bg-slate-950 text-white h-screen flex flex-col shadow-xl fixed left-0 top-0"
    >
      {/* Logo */}

      <div className="h-20 flex items-center justify-center border-b border-slate-800">

        <h1 className="text-2xl font-bold">

          <span className="text-green-500">Premium</span>

          Nutrition

        </h1>

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto py-6">

        {sidebarMenu.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 mx-4 px-4 py-3 rounded-xl transition-all mb-2
                ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >

              <Icon size={20} />

              <span>{item.title}</span>

            </NavLink>

          );

        })}

      </div>

      {/* Logout */}

      <div className="border-t border-slate-800 p-5">

        <button className="w-full flex items-center gap-3 justify-center py-3 rounded-xl bg-red-500 hover:bg-red-600 transition">

          <FiLogOut />

          Logout

        </button>

      </div>

    </motion.aside>
  );
};

export default Sidebar;