import DashboardCards from "../components/dashboard/DashboardCards";
import DashboardChart from "../components/dashboard/DashboardChart";
import LatestProducts from "../components/dashboard/LatestProducts";
import LatestInquiry from "../components/dashboard/LatestInquiry";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

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

      <div className="grid lg:grid-cols-2 gap-6">

        <LatestProducts />

        <LatestInquiry />

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <QuickActions />

        <RecentActivity />

      </div>

    </div>
  );
};

export default Dashboard;