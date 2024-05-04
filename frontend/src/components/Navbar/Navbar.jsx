import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <Link to="/" className="text-white text-xl font-bold">Logo</Link> {/* Replace anchor tag with Link */}
          
          {/* Menu Items (for medium and large screens) */}
          <ul className="hidden md:flex space-x-4">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu (hidden by default) */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;