import { motion } from "framer-motion";

const OfferCard = ({ offer }) => {
  const Icon = offer.icon;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      className="group rounded-3xl border border-lime-500/20 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 transition-all hover:border-lime-400"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-3xl text-lime-400 group-hover:bg-lime-400 group-hover:text-black">
        <Icon />
      </div>

      <h3 className="text-3xl font-bold text-white">
        {offer.title}
      </h3>

      <p className="mt-4 text-zinc-400">
        {offer.subtitle}
      </p>
    </motion.div>
  );
};

export default OfferCard;