import { FaDumbbell } from "react-icons/fa";

const FooterBrand = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-lime-400 p-3">
          <FaDumbbell className="text-black text-xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Premium Sports Nutrition
          </h2>

          <p className="text-zinc-400">
            100% Genuine Supplements
          </p>
        </div>
      </div>

      <p className="mt-6 leading-7 text-zinc-400">
        Helping fitness enthusiasts achieve their goals with
        premium-quality supplements and trusted nutrition products.
      </p>
    </div>
  );
};

export default FooterBrand;