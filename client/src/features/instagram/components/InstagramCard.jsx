import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const InstagramCard = ({ post }) => {
  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <img
        src={post.image}
        alt="Instagram Post"
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
        <FaInstagram className="text-5xl text-white" />
      </div>
    </motion.a>
  );
};

export default InstagramCard;