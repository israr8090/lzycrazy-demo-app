import React from "react";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-end min-h-screen">
        <Testimonial />
        <Footer />
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
