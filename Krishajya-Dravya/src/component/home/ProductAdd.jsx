import React, { useState, useEffect } from "react";
import Nav from "../all/nav";
import Footer from "../all/footer";
import Heart from "../all/Heart";

const ProductAdd = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState({}); // store heart state per product

  // Load products from public/data/vegetables.json
  useEffect(() => {
    fetch("/data/vegetables.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add product to cart
  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev };
      updated[id]--;
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };

  // Toggle wishlist (heart)
  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Nav />
      <div className="relative min-h-screen bg-gray-50 p-6">
        {/* Search Bar */}
        <div className="flex items-center justify-center gap-4 bg-white px-8 py-6">
          <select className="border border-gray-300 px-4 py-2 rounded text-base font-bold cursor-pointer">
            <option disabled selected>
              Select Category
            </option>
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex flex-col items-center"
            >
              {/* Heart button */}
              <div className="flex justify-end w-full mb-2">
                <button onClick={() => toggleWishlist(item.id)}>
                  <Heart
                    filled={wishlist[item.id] || false}
                    color={wishlist[item.id] ? "text-red-500" : "text-gray-400"}
                    animate={wishlist[item.id]}
                  />
                </button>
              </div>

              <img
                src={item.image_url}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-xl shadow-md"
              />
              <h2 className="text-xl font-bold mt-3 text-gray-800">{item.name}</h2>
              <p className="text-gray-500 text-sm text-center mt-1">
                {item.description}
              </p>
              <p className="mt-2 font-medium text-gray-600">{item.weight}</p>
              <p className="text-green-600 font-extrabold text-lg">
                ₹{item.price}
              </p>

              {/* Cart buttons */}
              {cart[item.id] ? (
                <div className="flex items-center mt-4 bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white font-bold"
                  >
                    -
                  </button>
                  <span className="px-5 py-2 text-gray-800 font-semibold">
                    {cart[item.id]}
                  </span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white font-bold"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(item.id)}
                  className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-md font-semibold transition-all duration-300"
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>

        {/* View Cart Button */}
        {Object.keys(cart).length > 0 && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
            <a href="/cart" className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 rounded-full shadow-lg text-lg font-bold transition-all duration-300">
              View Cart ({Object.values(cart).reduce((a, b) => a + b, 0)})
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductAdd;
