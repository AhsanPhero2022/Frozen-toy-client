const Section = () => {
  return (
    <section className=" py-10">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <img
              src="https://w0.peakpx.com/wallpaper/249/565/HD-wallpaper-jelsa-movie-woman-kiss-fantasy-snow-queen-love-pink-couple-disney-blue-art-elsa-man-redpear-jack-frost-girl-frozen.jpg"
              alt="Section Image"
              className="w-full"
            />
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-3xl text-white font-bold mb-4">
              Section Title
            </h2>
            <p className="text-white mb-4">
              While the Frozen Tangled Guardians crossover fandom has Jack as
              Elsa is father. Jelsa being a big part of the Rise of the Brave
              Tangled Frozen Dragons fandom, the ship is commonly featured in AU
              scenarios.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-8">
        <button className=" bg-gradient-to-r from-blue-200 to-green-300 py-2 px-4 rounded-full shadow-md ">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Section;
