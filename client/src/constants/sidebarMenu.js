import {
  FiHome,
  FiBox,
  FiGrid,
  FiImage,
  FiGift,
  FiStar,
  FiMail,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: FiHome,
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: FiBox,
  },
  {
    title: "Categories",
    path: "/admin/categories",
    icon: FiGrid,
  },
  {
    title: "Banners",
    path: "/admin/banners",
    icon: FiImage,
  },
  {
    title: "Offers",
    path: "/admin/offers",
    icon: FiGift,
  },
  {
    title: "Testimonials",
    path: "/admin/testimonials",
    icon: FiStar,
  },
  {
    title: "Inquiries",
    path: "/admin/inquiries",
    icon: FiMail,
  },
  {
    title: "Newsletter",
    path: "/admin/newsletter",
    icon: FiUsers,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: FiSettings,
  },
];

export default sidebarMenu;