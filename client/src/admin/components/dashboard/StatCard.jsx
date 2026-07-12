import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
  change,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
    >
      <div className={`h-2 bg-gradient-to-r ${color}`} />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-slate-500 text-sm">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-2 text-slate-800">
              {value}
            </h2>

            <p className="mt-4 text-green-500 text-sm font-semibold">
              {change}
            </p>

          </div>

          <div
            className={`h-16 w-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${color}`}
          >
            <Icon
              className="text-white"
              size={30}
            />
          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default StatCard;