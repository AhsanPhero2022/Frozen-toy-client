import PhotoCollection from "../pages/PhotoCollection";
import Banner from "./Banner";
import Section from "./Section/Section";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-12 bg-cyan-300">
        <PhotoCollection></PhotoCollection>
      </div>
      <Section></Section>
    </div>
  );
};

export default Home;
