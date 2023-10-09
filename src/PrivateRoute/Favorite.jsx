const Favorite = () => {
  return (
    <div className="font-serif text-center mt-10">
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
            />
            <div className=" text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-rose-500">
              <h1 className="text-5xl font-bold">
                Favorite Game By your choice
              </h1>
              <p className="py-6">
                Prepare for a brutal and unforgiving journey in the dark fantasy
                world.. Known for its challenging combat and intricate level
                design, this game thrusts players into a realm of relentless
                foes and epic boss battles
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
            />
            <div className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-rose-500">
              <h1 className="text-5xl font-bold">New One Play and Enjoy</h1>
              <p className="py-6">
                Explore breathtaking landscapes, encounter intriguing
                characters, and uncover hidden secrets as you journey through
                this captivating gaming experience.
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
            />
            <div className=" text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-rose-500">
              <h1 className="text-5xl font-bold">Favorite Game</h1>
              <p className="py-6">
                Immerse yourself in the thrilling world of Game Name. Embark on
                an epic adventure filled with action, intrigue, and challenges
                beyond your wildest imagination. Explore breathtaking
                landscapes, encounter intriguing characters experience.
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
