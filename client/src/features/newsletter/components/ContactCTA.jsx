import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      <a
        href="https://wa.me/919999999999"
        className="rounded-2xl bg-green-500 p-6 text-center font-bold text-white transition hover:scale-105"
      >
        <FaWhatsapp className="mx-auto mb-3 text-4xl" />
        WhatsApp
      </a>

      <a
        href="tel:+919999999999"
        className="rounded-2xl bg-blue-500 p-6 text-center font-bold text-white transition hover:scale-105"
      >
        <FaPhoneAlt className="mx-auto mb-3 text-4xl" />
        Call Us
      </a>

      <a
        href="https://instagram.com/"
        className="rounded-2xl bg-pink-500 p-6 text-center font-bold text-white transition hover:scale-105"
      >
        <FaInstagram className="mx-auto mb-3 text-4xl" />
        Instagram
      </a>
    </div>
  );
};

export default ContactCTA;