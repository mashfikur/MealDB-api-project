import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
