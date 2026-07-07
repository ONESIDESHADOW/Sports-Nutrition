import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full bg-lime-400 px-5 py-2 font-semibold text-black">
        #1 Sports Nutrition
      </span>

      <h1 className="mt-6 text-6xl font-black leading-tight text-white">
        BUILD YOUR
        <br />
        STRONGEST
        <br />
        SELF
      </h1>

      <p className="mt-6 max-w-xl text-lg text-zinc-400">
        Premium proteins, pre-workouts, amino acids and mass gainers to help you
        achieve your fitness goals.
      </p>

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
};

export default HeroContent;
