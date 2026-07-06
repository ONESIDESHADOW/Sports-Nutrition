const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-xl font-bold text-black shadow-lg">
        PS
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-wide text-white">
          Premium Sports
        </h1>

        <p className="text-xs text-zinc-400">
          Nutrition
        </p>
      </div>
    </div>
  );
};

export default Logo;