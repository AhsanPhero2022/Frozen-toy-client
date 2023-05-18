import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content  w-96">
        <div className="card  shadow-2xl bg-base-100">
          <div className="card-body ">
            <h2 className="text-3xl font-semibold ">Register Please</h2>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Names"
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter Your Photo URL"
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />

              <div className="mt-3">
                <small> Have an Account? </small>
                <Link to="/login" className=" underline text-blue-500">
                  Login
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn hover:bg-cyan-300 border-none text-black bg-green-200">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
