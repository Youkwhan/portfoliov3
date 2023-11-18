import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

function Layout() {
  return (
    <div className="app bg-bg-gray">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
