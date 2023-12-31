const Section = () => {
  return (
    <section className="mt-12 py-10">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <img
              src="https://w0.peakpx.com/wallpaper/249/565/HD-wallpaper-jelsa-movie-woman-kiss-fantasy-snow-queen-love-pink-couple-disney-blue-art-elsa-man-redpear-jack-frost-girl-frozen.jpg"
              alt="Section Image"
              className="w-full rounded"
            />
          </div>
          <div className="px-5 lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-3xl text-white font-bold mb-4">
              Jack & Queen Elsa
            </h2>
            <p className="text-white mb-4">
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
        <button className=" bg-gradient-to-r from-blue-200 to-green-300 font-semibold py-2 px-4 rounded-full shadow-md ">
          Like Them
        </button>
      </div>
    </section>
  );
};

export default Section;
