import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser().then().catch();
  };
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to={"/favorite"}>Favorite</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"login"}>Login</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"registration"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar text-neutral-content">
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
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="" />
            </div>
          </label>
          {user ? (
            <button
              onClick={handleLogOut}
              className="h-8 w-16 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className=" h-8 w-16 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... ">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
