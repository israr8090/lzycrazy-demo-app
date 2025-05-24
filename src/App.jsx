import BannerOne from "./components/BannerOne";
import BannerTwo from "./components/BannerTwo";
import bannerData from "./data/banner.json";
import BannerThree from "./components/BannerThree";

import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Card from "./components/cards/Card";
import Preview from "./components/cards/Preview";

function App() {
  const location = useLocation();

  // Check if current path starts with "/preview"
  const isPreviewPage = location.pathname.startsWith("/preview");
  return (
    <div>
      <Navbar />
      <BannerOne data={bannerData.bannerOne} />
      <BannerTwo data={bannerData.bannerTwo} />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
      <div className="flex flex-col justify-end min-h-screen">
        {!isPreviewPage && (
          <>
            <Testimonial />
          </>
        )}

        <BannerThree data={bannerData.bannerThree} />
        <Testimonial />

        <Footer />
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
