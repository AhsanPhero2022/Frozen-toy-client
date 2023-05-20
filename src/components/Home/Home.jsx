import useTitle from "../../hook/useTitle";
import PhotoCollection from "../pages/PhotoCollection";
import Banner from "./Banner";
import ReactTab from "./ReactTab/ReactTab";
import AnotherSection from "./Section/AnotherSection";
import Section from "./Section/Section";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <div className="py-12 bg-cyan-300">
        <PhotoCollection></PhotoCollection>
        <ReactTab></ReactTab>
        <AnotherSection></AnotherSection>
        <Section></Section>
      </div>
    </div>
  );
};

export default Home;
