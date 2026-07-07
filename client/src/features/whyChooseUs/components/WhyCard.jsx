import { motion } from "framer-motion";

const WhyCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-lime-400"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-3xl text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
        <Icon />
      </div>

      <h3 className="mb-3 text-xl font-bold text-white">
        {item.title}
      </h3>

      <p className="text-zinc-400 leading-7">
        {item.description}
      </p>
    </motion.div>
  );
};

export default WhyCard;