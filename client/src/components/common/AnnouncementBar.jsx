import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const AnnouncementBar = () => {
  return (
    <div className="hidden bg-lime-400 py-2 text-sm text-black md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          +91 XXXXX XXXXX
        </div>

        <div className="font-semibold">
          💪 100% Genuine Supplements
        </div>

        <div className="flex items-center gap-2">
          <FaInstagram />
          Instagram
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;