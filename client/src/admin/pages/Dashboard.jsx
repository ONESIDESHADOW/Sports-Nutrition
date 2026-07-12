import DashboardCards from "../components/dashboard/DashboardCards";
import DashboardChart from "../components/dashboard/DashboardChart";

const Dashboard = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back Admin 👋
        </p>

      </div>

      <DashboardCards />

      <DashboardChart />

    </div>
  );
};

export default Dashboard;