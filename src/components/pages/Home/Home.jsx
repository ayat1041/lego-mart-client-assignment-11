import Gallery from "./Gallery";
import Hero from "./Hero";
import LatestUpdate from "./LatestUpdate";
import ParentalGuide from "./ParentalGuide";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Hero></Hero>
      <div data-aos="fade-right">
        <Gallery></Gallery>
      </div>
      <ShopByCategory></ShopByCategory>
      <div data-aos="fade-left">
        <LatestUpdate></LatestUpdate>
      </div>
      <ParentalGuide></ParentalGuide>
    </div>
  );
};

export default Home;
