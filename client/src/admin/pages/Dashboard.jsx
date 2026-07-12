import DashboardCards from "../components/dashboard/DashboardCards";

const Dashboard = () => {
  return (
    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back, Admin 👋
        </p>

      </div>

      <DashboardCards />

    </div>
  );
};

export default Dashboard;