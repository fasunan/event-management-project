import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div
      className="max-w-6xl mx-auto font-bebas bg-cover bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: 'url("https://i.ibb.co/SyPYcfh/bg1.jpg")' }}
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
