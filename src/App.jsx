import React from "react";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-end min-h-screen">
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
