import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
