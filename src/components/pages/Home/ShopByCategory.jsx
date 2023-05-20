import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

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
    <div className="container mx-auto my-28">
      <h1 className="text-5xl mb-10">Shop By Category</h1>
      <Tabs>
        <TabList>
          <Tab>Lego Architecture</Tab>
          <Tab>Lego Cars</Tab>
          <Tab>Lego City</Tab>
          <Tab>Lego Superheroes</Tab>
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
