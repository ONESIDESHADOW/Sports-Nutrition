import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ item }) => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="flex gap-1">
        {Array(item.rating)
          .fill()
          .map((_, i) => (
            <FaStar
              key={i}
              className="text-yellow-400"
            />
          ))}
      </div>

      <p className="mt-6 leading-8 text-zinc-300">
        "{item.review}"
      </p>

      <div className="mt-8 flex items-center gap-4">

        <img
          src={item.image}
          alt=""
          className="h-16 w-16 rounded-full"
        />

        <div>
          <h4 className="font-bold text-white">
            {item.name}
          </h4>

          <p className="text-zinc-400">
            {item.city}
          </p>
        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;