import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "Offers", path: "/offers" },
  { name: "Contact", path: "/contact" },
];

const NavLinks = () => {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className="transition hover:text-lime-400"
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;