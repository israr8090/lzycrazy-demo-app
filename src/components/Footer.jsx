import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap px-5">
        {/* Left Column - Restaurant and Cafe */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 pr-4">
          <h2 className="text-red-600 text-2xl font-extrabold mb-2 leading-tight">
            RESTAURANT
            <br />
            AND CAFE
          </h2>
          <p className="text-sm mb-4 leading-relaxed">
            Lorem Ipsum is simply dummy
            <br />
            text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the
            <br />
            industry's standard dummy text ever
          </p>
          <button className="border border-white text-black bg-white text-sm py-1 px-4 hover:bg-white hover:text-black transition duration-300">
            Read More
          </button>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:px-12">
          <h2 className="text-red-600 text-lg mt-8 font-bold mb-2">
            QUICK LINKS
          </h2>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="text-white no-underline text-sm hover:text-gray-300"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline text-sm hover:text-gray-300"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline text-sm hover:text-gray-300"
              >
                PRICE TABLE
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline text-sm hover:text-gray-300"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline text-sm hover:text-gray-300"
              >
                CLIENT SAYS
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Our Projects */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-red-600 text-2xl font-extrabold mb-5">
            OUR PROJECTS
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-24">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Kitchen staff"
                className="w-3/4 h-full object-cover"
              />
            </div>
            <div className="h-24">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Chef preparing food"
                className="w-3/4 h-full object-cover"
              />
            </div>
            <div className="h-24">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Restaurant interior"
                className="w-3/4 h-full object-cover"
              />
            </div>
            <div className="h-24">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Food dishes"
                className="w-3/4 h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
