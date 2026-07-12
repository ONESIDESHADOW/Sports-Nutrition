const activity = [
  "New Product Added",
  "Banner Updated",
  "Offer Created",
  "Customer Inquiry",
  "Newsletter Subscription",
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activity.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3"
          >

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span>{item}</span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentActivity;