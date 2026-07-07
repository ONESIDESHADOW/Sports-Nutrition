import { motion } from "framer-motion";

const GoalCard = ({ goal }) => {
  const Icon = goal.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      className="cursor-pointer rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all hover:border-lime-400"
    >
      <Icon className="mx-auto mb-6 text-5xl text-lime-400" />

      <h3 className="text-2xl font-bold">
        {goal.title}
      </h3>

      <p className="mt-3 text-zinc-400">
        {goal.description}
      </p>
    </motion.div>
  );
};

export default GoalCard;