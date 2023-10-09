import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
const Offers = () => {
  return (
    <div className="mt-5 font-serif ">
      <div className="text-transparent bg-clip-text bg-gradient-to-l from-rose-500 to-green-500 text-3xl text-center font-medium mb-5">
        <h2>
          Only During this event <br /> Hi-dear this exiting Offer only for You
        </h2>
        <h3 className="text-transparent bg-clip-text bg-gradient-to-l from-green-500 to-yellow-500">
          Buy one Service From Home and Get One service Free.!!!
        </h3>
        <p>
          Here we keep this offer for registered user only. And You are one of
          our valued User. Do not miss out this Offer.{" "}
        </p>
      </div>
      <div className="carousel rounded-box ">
        <div className="carousel-item ">
          <img src="https://i.ibb.co/2kpZzVY/image-8.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/PcxW39w/image-10.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/YjLYNrP/image-4.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/W5QFC9v/image-7.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/0XYj3PX/image-1.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/h206RsV/image-2.png" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/wWV24Xk/image11.png" alt="Burger" />
        </div>
      </div>
      <div className="flex justify-between m-5">
        <p className="flex gap-2 text-yellow-500">
          <span>
            <FaAnglesLeft className="mt-1 text-yellow-500"></FaAnglesLeft>
          </span>
          Swap left{" "}
        </p>{" "}
        <p className="flex gap-2 text-yellow-500">
          swap Right
          <span className="mt-1">
            <FaAnglesRight className="text-yellow-500"></FaAnglesRight>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Offers;
