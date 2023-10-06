import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto font-bebas">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
