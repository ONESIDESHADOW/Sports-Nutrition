import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = () => {
  return (
    <div className="bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="ml-72">

        <Header />

        <main className="p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;