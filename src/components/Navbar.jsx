import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for icons
import logo from '../assests/images/lzy.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "HOME",
    "SERVICES",
    "PRICE TABLE",
    "PORTFOLIO",
    "CLIENT SAYS",
  ];

  return (
    <nav className="bg-black px-4 py-3 border-b border-red-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 z-10">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="font-bold text-lg">
            <span className="text-white">lzy</span>
            <span className="text-gray-300">Crazy</span>
          </span>
        </div>

        {/* Desktop Center Nav Items */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-sm font-semibold text-white">
          {navItems.map((item, i) => (
            <li key={i}>
              <a href="#" className="hover:text-red-500">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          className="md:hidden z-10 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Items */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-black border-t border-red-600 flex flex-col items-center py-4 space-y-4 md:hidden z-0">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href="#" className="text-white hover:text-red-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
