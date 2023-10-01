import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handleRegister=(e) => {
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value


        // creating user
        createUser(email,password)
        .then((result) => {
            console.log(result.user)
            toast.success("User Created Successfully")
        })
        .catch((error) => {
            console.error(error.message);
        })

    }

  return (
    <div>
      <div className="hero min-h-[95vh] bg-yellow-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
              <form onSubmit={handleRegister} >
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
                <div className="form-control mt-6">
                  <button className="btn btn-warning">Register</button>
                </div>
              </form>
              <span className="font-semibold">Already have an account ? Please <Link to="/login" > <button className="btn btn-link p-0">Login</button> </Link> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
