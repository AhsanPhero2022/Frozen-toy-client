import PhotoCollection from "../pages/PhotoCollection";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-12 bg-cyan-300">
        <PhotoCollection></PhotoCollection>
      </div>
    </div>
  );
};

export default Home;
