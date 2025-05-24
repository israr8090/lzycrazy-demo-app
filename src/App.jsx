import React from "react";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-end min-h-screen">
        <Testimonial />
        <Footer />
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
