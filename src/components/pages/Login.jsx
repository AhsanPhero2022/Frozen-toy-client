import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const Login = () => {
  useTitle("Login");
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        if (user) {
          Swal.fire({
            title: "Great!",

            text: "Successfully Login",
            icon: "success",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Try Again!",

            text: "Password Wrong ",
            icon: "warning",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content  w-96">
        <div className="card  shadow-2xl bg-base-100">
          <div className="card-body ">
            <h2 className="text-3xl font-semibold ">Please Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  required
                  placeholder="email"
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
                  required
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
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-warning">
              Google Sign-in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
