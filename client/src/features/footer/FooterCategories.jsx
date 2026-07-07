const FooterCategories = () => {
  const categories = [
    "Protein",
    "Mass Gainer",
    "Pre Workout",
    "Amino Acids",
    "Healthy Food",
  ];

  return (
    <div>
      <h3 className="mb-5 text-lg font-bold text-white">
        Categories
      </h3>

      <ul className="space-y-3">
        {categories.map((item) => (
          <li
            key={item}
            className="text-zinc-400 hover:text-lime-400 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCategories;