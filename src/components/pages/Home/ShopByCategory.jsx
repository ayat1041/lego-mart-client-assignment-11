import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://lego-mart-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toys]);

  const legoArch = toys.filter(
    (toy) => toy.sub_category === "Lego Architecture"
  );
  const legoCars = toys.filter(
    (toy) => toy.sub_category === "Lego Cars"
  );
  const legoCity = toys.filter(
    (toy) => toy.sub_category === "Lego City"
  );
  const legoHeroes = toys.filter(
    (toy) => toy.sub_category === "Lego Superheroes"
  );

  return (
    <div className="container mx-auto py-20 bg-gradient-to-r from-white via-slate-200 to-white">
      <h1 className="text-5xl mb-10" data-aos="fade-left">Shop By Category</h1>
      <Tabs data-aos="fade-right">
        <TabList>
          <Tab><h1 className="lg:text-xl hover:lg:text-slate-600 p-4 font-semibold transition-all duration-500 ease-out">Lego Architecture</h1></Tab>
          <Tab><h1 className="lg:text-xl hover:lg:text-slate-600 p-4 font-semibold transition-all duration-500 ease-out">Lego Cars</h1></Tab>
          <Tab><h1 className="lg:text-xl hover:lg:text-slate-600 p-4 font-semibold transition-all duration-500 ease-out">Lego City</h1></Tab>
          <Tab><h1 className="lg:text-xl hover:lg:text-slate-600 p-4 font-semibold transition-all duration-500 ease-out">Lego Superheroes</h1></Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-wrap justify-center gap-4 pt-4 pb-4">
            {legoArch.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-4 pt-4 pb-4">
            {legoCars.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-4 pt-4 pb-4">
            {legoCity.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-4 pt-4 pb-4">
            {legoHeroes.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
