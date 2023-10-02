import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorState, setErrorState] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    // reseting our states
    setErrorState("");

    if (password.length < 6) {
      setErrorState("Your Password Should be more than 6 charectars");
      return;
    }

    // creating user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        // updating users profile
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            toast.success("User Created Successfully");
          })
          .catch((error) => {
            toast.error(`${error.message}`);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-[95vh] bg-yellow-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
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
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                {errorState && (
                  <span className="font-semibold text-red-600">
                    {errorState}*
                  </span>
                )}
                <div className="form-control shadow-xl mt-6">
                  <button className="btn btn-warning">Register</button>
                </div>
              </form>
              <div className="flex flex-col gap-4">
                <div>
                  <button className="btn capitalize  shadow-xl  w-full">
                    {" "}
                    <FcGoogle className="text-xl"></FcGoogle> Sign up with
                    Google
                  </button>
                </div>
                <div>
                  <button className="btn capitalize  shadow-xl  w-full">
                    <BsGithub className="text-xl"></BsGithub> Sign up with
                    Github
                  </button>
                </div>
              </div>
              <span className="font-semibold text-center text-gray-500">
                Already have an account ? Please{" "}
                <Link to="/login">
                  {" "}
                  <button className="btn btn-link p-0">Login</button>{" "}
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
