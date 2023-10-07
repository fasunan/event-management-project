// import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { AuthContext } from "../Providers/AuthProvider";

const LoginWithLink = () => {
  //   const { linkLogIn } = useContext(AuthContext);
  //   linkLogIn()
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   logOutUser()
  //     .then((result) => {
  //       console.log(result);
  //     })
  // .catch((error) => {
  //   console.log(error);
  // });
  return (
    <div className="">
      <div className=" w-2/3  rounded-lg shadow-md p-4">
        <h5 className="mb-3 text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
          You Can Login With..
        </h5>

        <ul className="my-4 space-y-3">
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <FaGoogle className="text-purple-400"></FaGoogle>
              <span
                // onClick={linkLogIn}
                className="ml-3 flex-1 whitespace-nowrap"
              >
                Google
              </span>
              <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400"></span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500"
              href="#"
            >
              <FaFacebook className="text-blue-500"></FaFacebook>
              <span className="ml-3 flex-1 whitespace-nowrap">Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginWithLink;
