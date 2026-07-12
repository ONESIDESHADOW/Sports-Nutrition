import { Link } from "react-router-dom";
import {
  FiBox,
  FiGrid,
  FiGift,
  FiImage,
} from "react-icons/fi";

const actions = [
  {
    title: "Add Product",
    icon: FiBox,
    to: "/products/add",
  },
  {
    title: "Add Category",
    icon: FiGrid,
    to: "/categories",
  },
  {
    title: "Add Banner",
    icon: FiImage,
    to: "/banners",
  },
  {
    title: "Add Offer",
    icon: FiGift,
    to: "/offers",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.to}
              className="bg-green-500 hover:bg-green-600 transition rounded-xl p-5 text-white text-center"
            >

              <Icon size={28} className="mx-auto mb-3" />

              {item.title}

            </Link>
          );

        })}

      </div>

    </div>
  );
};

export default QuickActions;