import { Link } from "react-router-dom";
import LoginWithLink from "./LoginWithLink";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-2">
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
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary  text-black">Login</button>
                </div>
              </form>
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
      <div>
        <LoginWithLink></LoginWithLink>
      </div>
    </div>
  );
};

export default Login;
