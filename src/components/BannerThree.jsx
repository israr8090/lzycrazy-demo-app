import React from "react";

function BannerThree({ data }) {
  return (
    <div
      className="w-full px-6 py-12"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className="grid md:grid-cols-3 items-center justify-between gap-8">

        {/* Left-side Content */}
        <div>
          <h2 className="text-nowrap text-2xl md:text-3xl font-bold text-black mb-4">
            {data.heading}
          </h2>
          <p className="text-white text-base leading-relaxed">
            {data.description1}
          </p>
        </div>

        {/* Middle */}
        <div>
          <div className="md:mb-12"></div>
          <p className="text-white text-base leading-relaxed">
            {data.description2}
          </p>
        </div>

        {/* Right-side Image */}
        <div className=" flex items-center justify-center w-full md:w-auto">
          <img
            src={data.image}
            alt="Restaurant Menu Visual"
            className="max-w-xs md:max-w-sm w-full h-auto object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerThree;
