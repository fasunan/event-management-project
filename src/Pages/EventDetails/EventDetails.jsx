import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
const EventDetails = () => {
  const [details, setDetails] = useState({});
  console.log(details);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const findDetails = data?.find((event) => event.id == id);

        setDetails(findDetails);
      });
  }, [id]);
  const backgroundImage = "/public/image11.png";
  return (
    <div
      className="hero min-h-screen text-red-600"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={details.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{details.title}</h1>
          <p className="py-6">{details.description}</p>
          <p className="flex gap-1 mb-3 ">
            <FaDollarSign className="mt-[2px] text-lg"></FaDollarSign> Price :{" "}
            {details.price}
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
