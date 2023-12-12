import { Link, NavLink, useNavigate } from "react-router-dom";
import "../components/styles/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const { currentUser, userSignOut, setCurrentUser, loading } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        setCurrentUser(null);
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="">
      <div className="navbar bg-base-100 border-b-2">
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
        <div className="navbar-end space-x-4">
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : currentUser ? (
            <>
              <BsCart3
                onClick={() => navigate("/cart")}
                className="text-xl cursor-pointer "
              ></BsCart3>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        currentUser.photoURL
                          ? currentUser.photoURL
                          : "https://i.ibb.co/bHYZB8H/user-placehoder.png"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box font-semibold flex flex-col gap-4   text-center text-gray-400"
                >
                  <li className="text-xl">{currentUser.displayName}</li>
                  <li>{currentUser.email}</li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-neutral btn-sm"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="btn btn-warning btn-outline font-semibold"
              >
                Register
              </Link>
              <Link to="/login" className="btn btn-warning font-semibold">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
