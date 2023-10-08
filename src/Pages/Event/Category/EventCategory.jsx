const EventCategory = () => {
  return (
    <div className="">
      <div className=" rounded-lg shadow-md p-4">
        <h5 className="mb-3 text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-red-500">
          Select Your Category.. From our Service
        </h5>

        <ul className="my-4 space-y-3">
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap text-rose-600">
                Action
              </span>
              <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400"></span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap  text-rose-600">
                Strategy
              </span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap  text-rose-600">
                Classic
              </span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap  text-rose-600">
                Puzzle
              </span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap  text-rose-600">
                Adventure
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="font-serif">
        <p>Customer Review</p>

        <div className="border-2  border-pink-600 rounded w-56 h-48 mb-4  ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src=" https://i.ibb.co/cJncNDg/avater-1.png" />
            </div>
          </div>
          <p>
            Sarah Smith: ⭐⭐⭐⭐⭐ I love eSports.Play! The variety of games
            and tournaments they offer is fantastic. There something for
            everyone.{" "}
          </p>
        </div>
        <div className="border-2  border-pink-600 rounded w-56 h-48 mb-4 ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co/d5Lcct7/avater-3.png" />
            </div>
          </div>
          <p>
            {" "}
            John Doe: ⭐⭐⭐⭐⭐ eSports.Play is a gamer paradise! The events
            are well-organized, and Ive met some amazing people who share my
            passion for gaming.
          </p>
        </div>
        <div className="border-2  border-pink-600 rounded w-56 h-48 mb-4 ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co/HBvcGNf/avater-4.png" />
            </div>
          </div>
          <p>
            GamerGirl91: ⭐⭐⭐⭐⭐ I cant get enough of eSports.Play! The
            community here is super friendly, and the events are
            adrenaline-pumping.{" "}
          </p>
        </div>
        <div className="border-2  border-pink-600 rounded w-56 h-48 mb-4 ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co/dBjwDZb/avater-2.png" />
            </div>
          </div>
          <p>
            Maximus: ⭐⭐⭐⭐ eSports.Play has provided me with countless hours
            of entertainment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCategory;
