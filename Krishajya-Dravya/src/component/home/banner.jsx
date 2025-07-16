import React from "react";

const banner = () => {
  return (
    <div className="px-28  pb-5  flex flex-wrap justify-between items-center bg-white text-[#0b0808] font-sans">
      {/* Text Section */}
      <div className="flex-1 max-w-lg p-5">
        <h1 className="text-5xl font-bold mt-2 mb-4 leading-tight">
          Deliver <br /> Organic Food
        </h1>
        <p className="text-lg text-gray-600 mb-10 font-semibold leading-relaxed">
          Start your day with the perfect blend of taste and nutrition — wild berries, organic oats, pure joy.
        </p>
        <div className="flex gap-4 mb-4 flex-wrap">
          <a
            href="#"
            className="bg-[#76b947] hover:bg-[#5e9e3c] text-white px-5 py-3 rounded-lg font-semibold transition duration-300 hover:shadow-lg"
          >
            DISCOVER NOW
          </a>
          <a
            href="#"
            className="bg-[#f7941d] hover:bg-[#e68410] text-white px-5 py-3 rounded-lg font-semibold transition duration-300 hover:shadow-lg"
          >
            ABOUT US
          </a>
        </div>
        <a href="mailto:Info@gmail.com" className="text-[#004aad] font-bold underline">
          Info@gmail.com
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-end p-5">
        <img
          src="fruits.jpg"
          alt="Organic Food Basket"
          className="w-[480px] max-w-full mt-5 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* Dots Section */}
      <div className="w-full text-center text-2xl mt-8 space-x-2">
        <span className="cursor-pointer">•</span>
        <span className="cursor-pointer text-black">•</span>
        <span className="cursor-pointer">•</span>
      </div>
    </div>
  );
};

export default banner;
