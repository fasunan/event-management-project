import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Registration = () => {
  const [registerError, setRegistrationError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createNewUser } = useContext(AuthContext);
  const handleCreateAccount = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name);

    setRegistrationError("");
    setSuccess("");
    if (password.length < 6) {
      setRegistrationError("");
      toast.error("Password must be at least 6 characters long", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegistrationError();
      toast.error("Password must contain at least one uppercase letter", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegistrationError();
      toast.error("Password must contain at least one special character", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess();
        toast.success("Account created successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="text-black">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl ">
              Create an Account !!! Its free and Simple!!!!!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleCreateAccount}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered border-2 border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered border-2 border-blue-500"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className=" btn btn-primary text-blue-500 text-2xl font-serif rounded bg-gradient-to-r from-pink-500 to-yellow-500">
                    Register
                  </button>
                </div>
              </form>
              <ToastContainer></ToastContainer>
              {registerError && <p>{registerError}</p>}
              {success && <p>{success}</p>}
              <div>
                <p className="text-slate-800 font-medium">
                  Already Have an Account? please
                  <Link to={"/login"}>
                    <button className="btn btn-link">Login</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
