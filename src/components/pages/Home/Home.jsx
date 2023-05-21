import Gallery from "./Gallery";
import Hero from "./Hero";
import LatestUpdate from "./LatestUpdate";
import ParentalGuide from "./ParentalGuide";
import ShopByCategory from "./ShopByCategory";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
