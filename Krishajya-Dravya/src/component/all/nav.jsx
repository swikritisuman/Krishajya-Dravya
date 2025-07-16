import React from 'react';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import logo from '../../../public/logo.png'

const nav = () => {
  return (
    <div className="bg-[#f9f6f0] min-w-screen">
      {/* Navbar */}
      <header className="bg-white flex justify-between items-center px-8 py-3 shadow-md">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="text-lg font-bold text-gray-800 font-sans">KRISAJYA DRAVYA</h1>
          <nav className="hidden sm:flex gap-6 font-bold text-gray-700">
            <a href="#" className="hover:text-green-600">Home</a>
            <a href="#" className="hover:text-green-600">History</a>
            <a href="#" className="hover:text-green-600">Pages</a>
            <a href="#" className="hover:text-green-600 flex items-center gap-1">
              Product <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">New</span>
            </a>
            <a href="#" className="hover:text-green-600">How It Works</a>
            <a href="#" className="hover:text-green-600">Blog</a>
            <a href="#" className="hover:text-green-600">Contact</a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <span className="font-semibold text-gray-700">(3000.00)</span>
          <div className="relative text-green-600 text-lg">
            <FaShoppingBag />
            <sup className="absolute -top-2 -right-2 bg-gray-200 text-xs px-1.5 rounded-full">0</sup>
          </div>
          <div className="relative text-orange-500 text-lg">
            <FaHeart />
            <sup className="absolute -top-2 -right-2 bg-gray-200 text-xs px-1.5 rounded-full">0</sup>
          </div>
          <img src="user.jpg" alt="User" className="w-10 h-10 rounded-full" />
          <span className="font-bold text-gray-700">SOURAV BARIK</span>
        </div>
      </header>

      {/* Search Bar */}
      <div className="flex items-center justify-center gap-4 bg-white px-8 py-6">
        <select className="border border-gray-300 px-4 py-2 rounded text-base font-bold cursor-pointer">
          <option disabled selected>Select Category</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy Products</option>
          <option value="beverages">Beverages</option>
          <option value="fish">Fishes</option>
        </select>
        <input
          type="text"
          placeholder="Search product"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded text-lg"
        />
      </div>
    </div>
  );
};

export default nav;
