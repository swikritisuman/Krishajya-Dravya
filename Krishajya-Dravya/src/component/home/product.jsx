import React from "react";

const product = () => {
  const products = [
    {
      badge: "-20",
      image:
        "https://media.istockphoto.com/id/155162079/photo/steaming-hot-broccoli-on-a-fork.jpg?s=1024x1024&w=is&k=20&c=SZn-WoCvs8uaGRcUNS23jRIU23G3VUH6GL2IveVBSq0=",
      type: "VEGETABLE",
      name: "Broccoli",
      price: "$9.00 / kg",
    },
    {
      badge: "NEW",
      image:
        "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "VEGETABLE",
      name: "Indian Green Vegetable",
      price: "$12.00 / kg",
      isNew: true,
    },
    {
      badge: "-25",
      image:
        "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "ORGANIC",
      name: "Avocado",
      price: "$15.00 / kg",
    },
    {
      badge: "-30",
      image:
        "https://images.pexels.com/photos/793267/pexels-photo-793267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "ORGANIC",
      name: "Mushrooms",
      price: "$7.00 / kg",
    },
    {
        badge: "-20",
        image:
          "https://media.istockphoto.com/id/155162079/photo/steaming-hot-broccoli-on-a-fork.jpg?s=1024x1024&w=is&k=20&c=SZn-WoCvs8uaGRcUNS23jRIU23G3VUH6GL2IveVBSq0=",
        type: "VEGETABLE",
        name: "Broccoli",
        price: "$9.00 / kg",
      },
  ];

  const carouselItems = [
    {
      image:
        "https://images.pexels.com/photos/27939229/pexels-photo-27939229/free-photo-of-a-shelf-with-snacks-and-snacks-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Grocery",
    },
    {
      image:
        "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg",
      label: "Fresh Vegetable",
    },
    {
      image:
        "https://images.pexels.com/photos/5845848/pexels-photo-5845848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Dairy",
    },
    {
      image:
        "https://images.pexels.com/photos/375897/pexels-photo-375897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Fresh Fruits",
    },
    {
      image:
        "https://images.pexels.com/photos/9986235/pexels-photo-9986235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Leafy and Salad greens",
    },
    
  ];

  return (
    <div className="bg-[#f6f3ef] font-sans min-h-screen">
      <div className="flex justify-center overflow-x-auto p-5 px-12 gap-8 items-center">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative flex-none">
            <img
              src={item.image}
              alt={item.label}
              className="w-64 h-40 object-cover rounded-lg"
            />
            <span className="absolute bottom-2 left-2 text-white font-bold bg-black/50 px-3 py-1 rounded">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <h2 className="ml-8 text-xl px-10 font-bold">Popular Product</h2>

      <div className="flex flex-wrap justify-center gap-12 p-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white w-56 rounded-lg shadow-md p-4 text-center relative"
          >
            <div
              className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${
                product.isNew ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {product.badge}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-contain mx-auto my-3"
            />
            <div className="text-xs text-gray-500 mt-2">{product.type}</div>
            <div className="font-bold text-sm mt-1">{product.name}</div>
            <div className="text-sm my-2">{product.price}</div>
            <div className="flex justify-center items-center gap-2">
              <button className="bg-gray-200 px-2 py-1 font-bold">-</button>
              <span className="w-5 text-center">2</span>
              <button className="bg-gray-200 px-2 py-1 font-bold">+</button>
            </div>
            <button className="bg-blue-900 text-white px-4 py-1 rounded mt-3">🛒</button>
          </div>
        ))}
      </div>

      <button className="block mx-auto bg-green-600 text-white px-6 py-2 rounded font-bold mb-8">
        ALL TRENDING
      </button>
    </div>
  );
};

export default product;