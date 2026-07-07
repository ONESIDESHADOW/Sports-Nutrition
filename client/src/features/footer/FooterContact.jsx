import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const FooterContact = () => {
  return (
    <div>
      <h3 className="mb-5 text-lg font-bold text-white">
        Contact
      </h3>

      <div className="space-y-4 text-zinc-400">

        <p>📍 Mumbai, Maharashtra</p>

        <p className="flex items-center gap-2">
          <FaPhoneAlt />
          +91 XXXXX XXXXX
        </p>

        <p className="flex items-center gap-2">
          <FaEnvelope />
          info@example.com
        </p>

        <div className="flex gap-4 pt-4">

          <FaInstagram className="cursor-pointer text-2xl hover:text-pink-500 transition" />

          <FaWhatsapp className="cursor-pointer text-2xl hover:text-green-500 transition" />

        </div>

      </div>
    </div>
  );
};

export default FooterContact;