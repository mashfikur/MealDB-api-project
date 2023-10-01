import { NavLink } from "react-router-dom";
import "../components/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/foods">Foods</NavLink>
            </ul>
          </div>
          <a className=" capitalize font-light text-amber-700  text-3xl">
            [ FooDictionary ]
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center space-x-6 text-amber-700 font-semibold text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/foods">Foods</NavLink>
            <NavLink to="/categories">Categories</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-warning font-semibold">Log In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
