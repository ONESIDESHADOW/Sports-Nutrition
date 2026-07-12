const inquiry = [
  {
    name: "Prem",
    subject: "Protein",
    status: "New",
  },
  {
    name: "Rahul",
    subject: "Mass Gainer",
    status: "Read",
  },
  {
    name: "Amit",
    subject: "Creatine",
    status: "New",
  },
];

const LatestInquiry = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Latest Inquiry
      </h2>

      {inquiry.map((item, index) => (

        <div
          key={index}
          className="flex justify-between py-4 border-b"
        >

          <div>

            <h4 className="font-semibold">
              {item.name}
            </h4>

            <p className="text-sm text-gray-500">
              {item.subject}
            </p>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-white text-sm ${
              item.status === "New"
                ? "bg-green-500"
                : "bg-blue-500"
            }`}
          >
            {item.status}
          </span>

        </div>

      ))}

    </div>
  );
};

export default LatestInquiry;