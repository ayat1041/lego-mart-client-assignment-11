import Gallery from "./Gallery";
import Hero from "./Hero";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Hero></Hero>
      <div data-aos="fade-right">
        <Gallery ></Gallery>
        </div>
        <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
