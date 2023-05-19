import { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { AuthContext } from "../../pages/Provider/Provider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="lg:flex items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6">
      <div className="flex items-center">
        {/* Website Logo */}
        <img
          className="h-12 w-12 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQknObtheTu65vYmjMlj53m0QGpMDLE1QTWg&usqp=CAU"
          alt="Logo"
        />

        {/* Website Name */}
        <span className="text-white text-xl font-semibold ml-2">
          Disney Dolls Shopping Mall
        </span>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-gray-200 hover:text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ position: "absolute", top: "1rem", right: "1rem" }}
        >
          {menuOpen ? (
            <path
              strokeLinecap=""
              strokeLinejoin=""
              strokeWidth={4}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navbar Links */}
      <div
        className={`${
          menuOpen ? "lg:flex" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg lg:flex-grow my-4 lg:my-0">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:font-semibold hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/alltoys"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:font-semibold hover:text-white mr-4"
          >
            AllToys
          </Link>
          <Link
            to="/my-toys"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:font-semibold hover:text-white mr-4"
          >
            MyToys
          </Link>
          <Link
            to="/addatoy"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:font-semibold hover:text-white mr-4"
          >
            Add A Toy
          </Link>
          <Link
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:font-semibold hover:text-white mr-4"
          >
            Blogs
          </Link>
        </div>

        {/* Login and Register Buttons */}
        <div className="flex items-center">
          {/* User Profile Picture */}
          {user?.photoURL ? (
            <img
              className="h-8 w-8 mr-6 ml-4 rounded-full"
              src="/path/to/profile-picture.png"
              alt="Profile"
            />
          ) : (
            ""
          )}
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2">
                Login
              </button>
            </Link>
          )}
          {user?.email ? (
            ""
          ) : (
            <Link to="/register">
              <button className="bg-green-300   px-4 py-2 rounded hover:bg-green-200">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
