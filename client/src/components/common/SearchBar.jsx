import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="hidden w-full max-w-md lg:block">
      <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-3">
        <FaSearch className="text-zinc-500" />

        <input
          type="text"
          placeholder="Search supplements..."
          className="ml-3 w-full bg-transparent outline-none text-white placeholder:text-zinc-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;