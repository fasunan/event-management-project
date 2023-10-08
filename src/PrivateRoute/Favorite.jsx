import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Favorite = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="font-serif text-center mt-10"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500">
        Welcome to Your favorite Event.
      </h2>
      <p className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500">
        Here you can find your favorite game Event and play online
      </p>

      <div>
        <div className="hero mt-10 mb-10 bg-gray-600">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/6XJZFpr/fvrt-1.jpg"
              className="w-[500px] rounded-lg shadow-2xl"
              data-aos="flip-right"
              data-aos-duration="3000"
            />
            <div className=" text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-rose-500">
              <h1 className="text-5xl font-bold">
                Favorite Game By your choice
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className=" btn h-12 w-32 border-none rounded bg-gradient-to-r from-pink-500 to-yellow-500">
                Play online
              </button>
            </div>
          </div>
        </div>

        <div className="hero  bg-gray-600">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/0rGtMT4/fvrt-2.jpg"
              className="w-[500px] rounded-lg shadow-2xl"
              data-aos="flip-left"
              data-aos-duration="3000"
            />
            <div className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-rose-500">
              <h1 className="text-5xl font-bold">New One Play and Enjoy</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className=" btn h-12 w-32 border-none rounded bg-gradient-to-r from-pink-500 to-yellow-500">
                Play online
              </button>
            </div>
          </div>
        </div>

        <div className="hero mt-10 bg-gray-600 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/tDxTPLV/fvrt-3.jpg"
              className="w-[500px] rounded-lg shadow-2xl"
              data-aos="flip-right"
              data-aos-duration="3000"
            />
            <div className=" text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-rose-500">
              <h1 className="text-5xl font-bold">Favorite Game</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className=" btn h-12 w-32 border-none rounded bg-gradient-to-r from-pink-500 to-yellow-500">
                Play online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
