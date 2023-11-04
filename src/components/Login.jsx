import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  const [showError, setShowError] = useState("");
  const { userSignIn, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();
  const passRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //reseting the error state
    setShowError("");

    // password  validation
    if (password.length < 6) {
      setShowError("Your Password should be more than 6 charectars");
      return;
    }

    //signing in user
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        toast.success("Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  const handleForgotPass = () => {
    const emailField = emailRef.current.value;

    // email validation
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // reseting the error
    setShowError("");

    if (!regex.test(emailField)) {
      setShowError("Please enter a valid email");
      return;
    }

    // sending password reset link
    sendPasswordResetEmail(auth, emailField)
      .then(() => {
        toast.success("Please check your email to update Password");
        emailRef.current.value = "";
        passRef.current.value = "";
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
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
                    required
                    ref={emailRef}
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
                    ref={passRef}
                    placeholder="password"
                    className="input input-bordered"
                  />

                  <label className="label">
                    <Link
                      onClick={handleForgotPass}
                      href=""
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                {showError && (
                  <span className="font-semibold text-red-600">
                    {showError}*
                  </span>
                )}
                <div className="form-control shadow-xl mt-6">
                  <button className="btn btn-accent">Login</button>
                </div>
              </form>
              <div className="flex flex-col gap-4">
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn capitalize  shadow-xl  w-full"
                  >
                    {" "}
                    <FcGoogle className="text-xl"></FcGoogle> Sign in with
                    Google
                  </button>
                </div>
                <div>
                  <button className="btn capitalize  shadow-xl  w-full">
                    <BsGithub className="text-xl"></BsGithub> Sign in with
                    Github
                  </button>
                </div>
              </div>
              <span className="font-semibold text-gray-500 mt-4 text-center">
                New to this Website ? Please{" "}
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
