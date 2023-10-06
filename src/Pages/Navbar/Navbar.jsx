import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/games"}>Games</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/career"}>Favorite</NavLink>
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
        <NavLink to={"register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
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
          {/* {user ? (
            <button  className="btn btn-sm">
              Sign Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-sm">Login</button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
