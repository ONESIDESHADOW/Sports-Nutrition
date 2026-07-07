import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="hidden w-full max-w-lg lg:block">
      <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 transition focus-within:border-lime-400">
        <FaSearch className="text-zinc-500" />

        <input
          type="text"
          placeholder="Search Protein, Mass Gainer, Pre Workout..."
          className="ml-3 w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;