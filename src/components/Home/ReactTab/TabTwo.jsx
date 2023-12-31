import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const TabTwo = ({ item }) => {
  const { _id, title, img, Price, ratings } = item;

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: "ease-in-out", // Easing function
      // Additional configuration options
    });
  }, []);

  return (
    <div className="mx-auto card card-compact w-80 bg-base-100 shadow-xl">
      <figure className="h-40">
        <img src={img} alt="coming soooon!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {Price}</p>
        <p>Ratings: {ratings}</p>
        <div className="card-actions justify-end">
          <Link to={`/viewDetails/${_id}`}>
            <button
              data-aos="zoom-in"
              className="bg-gradient-to-r from-blue-200 to-green-300 font-semibold py-2 px-4 rounded-full shadow-md"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
