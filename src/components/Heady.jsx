import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/riskycody.png';

function Heady() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className=" top-1 z-50 w-full mx-auto">
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 bg-white shadow-md rounded-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#herosection">
            <img
              src={Logo}
              alt="RiskyCody Logo"
              className="w-12 h-12 sm:w-30 sm:h-30 object-contain transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 sm:gap-12">
            <li>
              <a
                href="#herosection"
                className="text-[#333333] hover:text-[#2563eb] text-base sm:text-xl font-medium transition-all duration-200 hover:scale-110 inline-block"
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
                className="text-[#333333] hover:text-[#2563eb] text-lg sm:text-2xl font-medium transition-all duration-200 hover:scale-110 inline-block"
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#333333] hover:text-[#2563eb] transition-colors duration-200 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white shadow-md rounded-sm mt-2 px-4 py-3">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#herosection"
                onClick={closeMenu}
                className="text-[#333333] hover:text-[#2563eb] text-lg font-medium transition-colors duration-200 block py-1.5"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="text-[#333333] hover:text-[#2563eb] text-xl font-medium transition-colors duration-200 block py-2"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                onClick={closeMenu}
                className="text-[#333333] hover:text-[#2563eb] text-xl font-medium transition-colors duration-200 block py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#worky"
                onClick={closeMenu}
                className="text-[#333333] hover:text-[#2563eb] text-xl font-medium transition-colors duration-200 block py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Heady;