import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const email = form.email.value;

    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      Swal.fire({
        title: "Try Again!",
        text: "Password Must be 6 characters long",
        icon: "warning",
        imageWidth: 400,
        imageHeight: 200,
      });

      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        profileUpdate(name, photo, createdUser);
        navigate("/");
        if (createdUser) {
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
            title: "Try Again",

            text: "Existing Gmail",
            icon: "warning",
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      });
  };

  const profileUpdate = (name, photo, createdUser) => {
    updateProfile(createdUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
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
            <h2 className="text-3xl font-semibold ">Register Please</h2>
            <form onSubmit={handleRegister}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
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
                  type="text"
                  required
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
                  required
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
