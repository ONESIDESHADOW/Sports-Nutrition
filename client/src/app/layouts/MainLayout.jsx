import { Outlet } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import Footer from "../../features/footer/Footer";


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;