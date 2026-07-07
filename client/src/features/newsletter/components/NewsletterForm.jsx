import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 md:flex-row"
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-lime-400"
      />

      <button
        className="flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-8 py-4 font-semibold text-black transition hover:bg-lime-300"
      >
        Subscribe

        <FaPaperPlane />
      </button>
    </form>
  );
};

export default NewsletterForm;