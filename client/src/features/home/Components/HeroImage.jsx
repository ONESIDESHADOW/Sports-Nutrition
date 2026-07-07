import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="flex justify-center"
    >
      <img
        src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d"
        alt=""
        className="w-full max-w-lg rounded-3xl"
      />
    </motion.div>
  );
};

export default HeroImage;