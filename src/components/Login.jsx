import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const [showError,setShowError]=useState('')
    const {userSignIn}=useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const email=e.target.email.value
    const password=e.target.password.value

    //reseting the error
    setShowError('')

    //signing in user
    userSignIn(email,password)
    .then((result) => {
        console.log(result.user)
        e.target.reset()
        toast.success("Logged In Successfully")
    })
    .catch((error) => {
        setShowError(error.message)
    })
  };

  return (
    <div>
      <div className="hero min-h-[95vh] bg-green-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log Into Your Account</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                {showError && <span className="font-semibold text-red-600">{showError}*</span>}
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Login</button>
                </div>
              </form>
              <span className="font-semibold">
                Already have an account ? Please{" "}
                <Link to="/register">
                  {" "}
                  <button className="btn btn-link p-0">Register</button>{" "}
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
