import React from 'react';

function Heady() {
  return (
    <div className="flex justify-between items-center px-6 sm:px-12 py-20  sm:py-8 bg-white shadow-md rounded-sm sticky top-1 z-50 w-300 h-15 mx-auto">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="#herosection">
          <img
            src="./src/assets/riskycody.png"
            alt="RiskyCody Logo"
            className="w-20 h-20 sm:w-28 sm:h-28 object-contain transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 sm:gap-12">
          <li>
            <a
              href="#herosection"
              className="text-[#333333] hover:text-[#2563eb] text-lg sm:text-2xl font-medium transition-all duration-200 hover:scale-110 inline-block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[#333333] hover:text-[#2563eb] text-lg sm:text-2xl font-medium transition-all duration-200 hover:scale-110 inline-block"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              className="text-[#333333] hover:text-[#2563eb] text-lg sm:text-2xl font-medium transition-all duration-200 hover:scale-110 inline-block scroll-smooth"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#worky"
              className="text-[#333333] hover:text-[#2563eb] text-lg sm:text-2xl font-medium transition-all duration-200 hover:scale-110 inline-block"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Heady;