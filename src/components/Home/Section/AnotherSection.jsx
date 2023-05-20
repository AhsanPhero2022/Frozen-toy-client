import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AnotherSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: "ease-in-out", // Easing function
      // Additional configuration options
    });
  }, []);

  return (
    <section className=" py-10">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center">
          <div className="lg:mx-20">
            <img
              className="lg:w-full rounded"
              src="https://i0.wp.com/theilluminerdi.com/wp-content/uploads/2020/04/at-home-with-olaf.jpg"
              alt=""
            />
            <h2 className="text-3xl text-white font-bold mb-4 text-center py-8">
              This is Olaf
            </h2>
            <p
              data-aos="fade-up"
              className="text-center lg:px-12 text-white mb-4"
            >
              Olaf Presents is an animated comedy miniseries of shorts that
              features Olaf (Josh Gad) retelling the stories of Disney films.
              The series was inspired by a scene in Frozen II where Olaf recaps
              Frozen. The series received positive responses, particularly for
              its humor.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-8">
        <button
          data-aos="zoom-in "
          className=" bg-gradient-to-r from-blue-200 to-green-300 font-semibold py-2 px-4 rounded-full shadow-md "
        >
          View Olaf Story
        </button>
      </div>
    </section>
  );
};

export default AnotherSection;
