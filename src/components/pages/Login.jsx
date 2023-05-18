import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content  w-96">
        <div className="card  shadow-2xl bg-base-100">
          <div className="card-body ">
            <h2 className="text-3xl font-semibold ">Please Login</h2>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />

              <div className="mt-3">
                <small>Do not have Account? </small>
                <Link to="/register" className=" underline text-blue-500">
                  SignUp
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn hover:bg-cyan-300 border-none text-black bg-green-200">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
