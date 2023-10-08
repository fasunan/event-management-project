const Banner = () => {
  return (
    <div
      className="hero mb-10"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/7tn9Cqr/jonathan-kemper-z-QMN9f-LJeh-M-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500">
            WellCome To eSports.Play Event
          </h1>
          <p className="mb-5 font-normal text-lg">
            your ultimate destination for immersive gaming experiences and
            thrilling competitions. Get ready to level up your gaming journey
            with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500">
              eSports.Play Events
            </span>
            : Where Gamers Unite!
          </p>
          <button className="btn text-red-500 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... ">
            Start Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
