import React from 'react';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // import Link
import logo from '../../../public/logo.png';

const Nav = () => {
  return (
    <div className="bg-[#f9f6f0] min-w-screen">
      {/* Navbar */}
      <header className="bg-white flex justify-between items-center px-8 py-3 shadow-md">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="text-lg font-bold text-gray-800 font-sans">KRISAJYA DRAVYA</h1>
          <nav className="hidden sm:flex gap-6 font-bold text-gray-700">
            <Link to="/" className="hover:text-green-600">Home</Link>
            
            

            {/* FIX HERE */}
            <Link to="/add-product" className="hover:text-green-600 flex items-center gap-1">
              Product <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">New</span>
            </Link>
            <a href="/cart" className="hover:text-green-600">Cart</a>
            <a href="/order" className="hover:text-green-600">Order</a>
            <a href="/contact" className="hover:text-green-600">Contact</a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <div className="relative text-green-600 text-lg">
            <FaShoppingBag />
            <sup className="absolute -top-2 -right-2 bg-gray-200 text-xs px-1.5 rounded-full">0</sup>
          </div>
          <div className="relative text-orange-500 text-lg">
            <FaHeart />
            <sup className="absolute -top-2 -right-2 bg-gray-200 text-xs px-1.5 rounded-full">0</sup>
          </div>
          
          <span className="font-bold text-gray-700">SOURAV BARIK</span>
        </div>
      </header>

      
    </div>
  );
};

export default Nav;
