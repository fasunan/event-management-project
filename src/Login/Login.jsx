import { Link } from "react-router-dom";
import LoginWithLink from "./LoginWithLink";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { logInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // if (result.user.emailVerified) {
        //   setSuccess("");
        //   toast.success("Login successful", {
        //     position: toast.POSITION.TOP_CENTER,
        //   });
        // } else {
        //   toast.error("plz verify your email and password", {
        //     position: toast.POSITION.TOP_CENTER,
        //   });
        // return
        // }

        setSuccess("");
        toast.success("Login successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
        if (loginError === "(auth/invalid-login-credentials)") {
          toast.error("Password doesn't match", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (loginError === "auth/invalid-email") {
          toast.error("Email doesn't match", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
  return (
    <div className="text-black">
      <LoginWithLink></LoginWithLink>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col items-center justify-center">
          <div className="text-center lg:text-left mb-5">
            <h1 className="text-5xl ">Login with</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-2 border-pink-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered border-2 border-pink-600"
                  />
                  <span
                    className="absolute mt-12 mr-8 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary  text-blue-500 text-2xl font-serif rounded bg-gradient-to-r from-pink-500 to-yellow-500">
                    Login
                  </button>
                </div>
              </form>
              <ToastContainer></ToastContainer>
              {loginError &&
                toast.error("Password doesn't match", {
                  position: toast.POSITION.TOP_CENTER,
                })}
              {success && <p>{success}</p>}
              <div>
                <p className="text-slate-800 font-medium">
                  Do not Have an Account? please
                  <Link to={"/registration"}>
                    <button className="btn btn-link">Create Account</button>
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

export default Login;
