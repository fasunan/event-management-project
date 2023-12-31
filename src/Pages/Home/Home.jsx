import { useLoaderData } from "react-router-dom";
import EventCard from "../Event/EventCard";
import EventCategory from "../Event/Category/EventCategory";
import Banner from "./Banner";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="mx-auto">
      <Banner></Banner>
      <div className="border-2 border-gray-600 h-10 mb-8 -mt-10 text-center text-3xl rounded">
        {" "}
        <h3 className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500">
          Our Services
        </h3>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="w-2/4 ml-8">
          <EventCategory></EventCategory>
        </div>
        <div className=" mr-10 w--3/4 md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 ">
          {data.map((data) => (
            <EventCard key={data.id} data={data}></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
