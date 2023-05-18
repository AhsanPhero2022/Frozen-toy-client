import banner from "../../assets/queen.jpg";

const Banner = () => {
  return (
    <>
      <div className="absolute">
        <img className="" src={banner} alt="" />
      </div>
      <div className="relative text-white space-y-2 top-52 w-1/2 ms-28">
        <h2 className="text-3xl font-bold ">This is Disney Queen</h2>
        <h2 className="text-3xl font-semibold">
          Welcome to disney shop you can buy your Troy from here
        </h2>
        <p>
          Queen Elsa (also known as The Snow Queen) is the deuteragonist of
          Disney's 2013 animated feature film Frozen and protagonist of Frozen
          II. She is the older sister of Princess (later Queen) Anna and was
          next in line for Arendelle's throne, until her powers over ice and
          snow led her to become the famous Snow Queen.
        </p>
        <button className="btn btn-info px-5">Like The Queen</button>
      </div>
    </>
  );
};

export default Banner;
