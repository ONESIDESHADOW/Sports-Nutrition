import dashboardData from "../../../constants/dashboardData";
import StatCard from "./StatCard";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {dashboardData.map((card) => (
        <StatCard
          key={card.title}
          {...card}
        />
      ))}

    </div>
  );
};

export default DashboardCards;