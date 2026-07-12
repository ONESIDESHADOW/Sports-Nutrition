import {
  FiBox,
  FiGrid,
  FiImage,
  FiGift,
  FiStar,
  FiMail,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

const dashboardData = [
  {
    title: "Products",
    value: 120,
    icon: FiBox,
    color: "from-blue-500 to-cyan-500",
    change: "+12%",
  },
  {
    title: "Categories",
    value: 8,
    icon: FiGrid,
    color: "from-purple-500 to-pink-500",
    change: "+3%",
  },
  {
    title: "Banners",
    value: 5,
    icon: FiImage,
    color: "from-orange-500 to-red-500",
    change: "+5%",
  },
  {
    title: "Offers",
    value: 14,
    icon: FiGift,
    color: "from-emerald-500 to-green-500",
    change: "+18%",
  },
  {
    title: "Testimonials",
    value: 34,
    icon: FiStar,
    color: "from-yellow-400 to-orange-400",
    change: "+8%",
  },
  {
    title: "Inquiries",
    value: 62,
    icon: FiMail,
    color: "from-indigo-500 to-violet-500",
    change: "+10%",
  },
  {
    title: "Subscribers",
    value: 148,
    icon: FiUsers,
    color: "from-pink-500 to-rose-500",
    change: "+22%",
  },
  {
    title: "Revenue",
    value: "₹0",
    icon: FiDollarSign,
    color: "from-teal-500 to-green-500",
    change: "Soon",
  },
];

export default dashboardData;