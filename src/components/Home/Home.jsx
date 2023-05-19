import PhotoCollection from "../pages/PhotoCollection";
import Banner from "./Banner";
import AnotherSection from "./Section/AnotherSection";
import Section from "./Section/Section";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-12 bg-cyan-300">
        <PhotoCollection></PhotoCollection>
        <AnotherSection></AnotherSection>
        <Section></Section>
      </div>
    </div>
  );
};

export default Home;
