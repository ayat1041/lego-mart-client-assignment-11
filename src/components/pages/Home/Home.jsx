import Gallery from "./Gallery";
import Hero from "./Hero";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Hero></Hero>
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
