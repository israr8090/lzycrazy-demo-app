import React from "react";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-end min-h-screen">
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
