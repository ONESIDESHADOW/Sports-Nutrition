import { Link } from "react-router-dom";

const FooterLinks = () => {
  const links = [
    "Home",
    "Products",
    "Offers",
    "Categories",
    "Contact",
  ];

  return (
    <div>
      <h3 className="mb-5 text-lg font-bold text-white">
        Quick Links
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              to="/"
              className="text-zinc-400 transition hover:text-lime-400"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;