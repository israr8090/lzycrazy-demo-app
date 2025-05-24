import React from "react";
import BannerOne from "./components/BannerOne";
import BannerTwo from "./components/BannerTwo";
import bannerData from "./data/banner.json";
import BannerThree from "./components/BannerThree";

function App() {
  return (
    <div className="space-y-4">
      <BannerOne data={bannerData.bannerOne} />
      <BannerTwo data={bannerData.bannerTwo} />
      <BannerThree data={bannerData.bannerThree} />
    </div>
  );
}

export default App;
