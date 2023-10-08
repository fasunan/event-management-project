const EventCategory = () => {
  return (
    <div className="">
      <div className=" rounded-lg shadow-md p-4">
        <h5 className="mb-3 text-lg lg:text-xl font-semibold">
          Select Your Category.. From our Service
        </h5>

        <ul className="my-4 space-y-3">
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap">Action</span>
              <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400"></span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap">Strategy</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap">Classic</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap">Puzzle</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <span className="ml-3 flex-1 whitespace-nowrap">Adventure</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventCategory;
