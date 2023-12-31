import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import Tabthree from "./Tabthree";

const ReactTab = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-one-ochre.vercel.app/frozen")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  const filteredData = category.filter((item) => {
    if (item.sub_category === "queen") {
      return item;
    }
  });
  const filteredPrince = category.filter((item) => {
    if (item.sub_category === "prince") {
      return item;
    }
  });
  const filteredOlaf = category.filter((item) => {
    if (item.sub_category === "olaf") {
      return item;
    }
  });

  // console.log(category);
  return (
    <div className="py-6 my-12 mx-12 lg:mx-24">
      <h2 className="text-2xl font-semibold text-center mt-4">
        This is Sub Category
      </h2>
      <Tabs>
        <TabList className="font-semibold my-4 ">
          <Tab>Queens Doll</Tab>
          <Tab>Princes Doll</Tab>
          <Tab>Olafs Doll</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {filteredData.map((item) => (
              <TabOne key={item._id} item={item}></TabOne>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {filteredPrince.map((item) => (
              <TabTwo key={item._id} item={item}></TabTwo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {filteredOlaf.map((item) => (
              <Tabthree key={item._id} item={item}></Tabthree>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;
