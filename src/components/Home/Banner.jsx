import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useTitle from "../../hook/useTitle";

const Banner = () => {
  useTitle("Home");
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: "ease-in-out", // Easing function
      // Additional configuration options
    });
  }, []);

  return (
    <>
      <div
        className="py-52 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.ibb.co/xqTmJkX/queen.jpg')",
        }}
      >
        <div className=" text-white space-y-2 top-52 lg:w-1/2 ms-4 lg:ms-28">
          <h2 data-aos="fade-up" className="text-3xl font-bold ">
            This is Disney Queen
          </h2>
          <h2 data-aos="fade-up" className="text-3xl font-semibold">
            Welcome to disney shop you can buy your Troy from here
          </h2>
          <p data-aos="fade-up">
            Queen Elsa (also known as The Snow Queen) is the deuteragonist of
            2013 animated feature film Frozen and protagonist of Frozen II. She
            is the older sister of Princess (later Queen) Anna and was next in
            line for throne, until her powers over ice and snow led her to
            become the famous Snow Queen.
          </p>
          <button data-aos="zoom-in" className="btn btn-info px-5">
            Like The Queen
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
