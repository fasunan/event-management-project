import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventCard = ({ data }) => {
  const { id, image, title, description, price } = data;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="card glass" data-aos="zoom-in" data-aos-duration="3000">
        <figure>
          <img
            src={image}
            alt=""
            data-aos="flip-right"
            data-aos-duration="3000"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500 text-3xl">
            {title}
          </h2>
          <p className="font-serif">{description}</p>
          <p className="flex gap-1 text-lg ">
            <FaDollarSign className="mt-[4px]  text-pink-700"></FaDollarSign>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-pink-700 to-red-300 ">
              Price : {price}
            </span>
          </p>
          <div className="">
            <Link to={`/details/${id}`}>
              <button className=" btn w-full text-lg text-transparent bg-clip-text bg-gradient-to-l from-yellow-300 to-red-500">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
EventCard.propTypes = {
  data: PropTypes.object,
};
export default EventCard;
