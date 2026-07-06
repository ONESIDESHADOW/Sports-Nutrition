const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <h2 className="text-3xl font-bold text-lime-400">
          PSN
        </h2>

        <div>Search</div>

        <div>Menu</div>
      </div>
    </header>
  );
};

export default Navbar;