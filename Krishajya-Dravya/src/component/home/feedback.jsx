import React from "react";

const feedback = () => {
  return (
    <div className="bg-[#fffaf5] text-[#333]">
      {/* Testimonial Section */}
      <section className="bg-[#fef6ef] py-5 text-center">
        <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
        <img
          src="https://i.pravatar.cc/100?img=3"
          alt="Client"
          className="w-20 h-20 rounded-full mx-auto mb-5"
        />
        <blockquote className="italic text-lg max-w-2xl mx-auto mb-2">
          “I appreciate your amazing services and professional staff for all your hard work and creative thinking! It was fun, and I hope to work with you again soon”
        </blockquote>
        <div className="text-[#f5a623] text-xl mt-2">★★★★★</div>
        <p className="font-bold mt-2">Rasalina Willams</p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-5 flex flex-wrap justify-around items-center px-5 gap-4">
        {[
          {
            title: "Organic Food",
            description:
              "Sumptuous, filling, and temptingly healthy food and health compilation",
            img: "https://img.icons8.com/color/96/vegetarian-food.png",
          },
          {
            title: "Fastest Delivery",
            description:
              "Sumptuous, filling, and temptingly healthy food and health compilation",
            img: "https://img.icons8.com/color/96/shipped.png",
          },
          {
            title: "Fast & Easy Payment",
            description:
              "Sumptuous, filling, and temptingly healthy food and health compilation",
            img: "https://media.istockphoto.com/id/1202064591/vector/bag-with-dollar-vector-iconvector-line-icon-quick-and-easy-loan-fast-money-providence.jpg?s=612x612&w=0&k=20&c=-j3NCaTMMXUCqqfeLJS__waIbP6BOFG-PeTCvxs36fU=",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-1 max-w-xs text-center m-4 p-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="text-base font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Blog Section */}
      <section className="py-10 px-32">
        <h2 className="text-2xl font-bold text-left mb-6">Blog & Articles</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              date: "13 January 2021",
              title: "Best guide to shopping for organic ingredients",
              content:
                "It's been quite a while since talked about our failures here. Since then, we've made some new",
              img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=300&h=180&q=80",
            },
            {
              date: "14 December 2021",
              title: "Zechsal Magnesium flakes especially made.",
              content:
                "It's been quite a while since talked about our failures here. Since then, we've made some new",
              img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              date: "28 February 2021",
              title: "Finding a way to separate 'work' to do a business.",
              content:
                "It's been quite a while since talked about our failures here. Since then, we've made some new",
              img: "https://media.istockphoto.com/id/1172975655/photo/delicious-fresh-vegetables-and-fruits-at-the-refrigerated-section-of-a-supermarket.jpg?s=612x612&w=0&k=20&c=8_jPA-jY2HcRQOvZN6YKCuY5tZPcaSoHrQScZvDVKqU=",
            },
            {
              date: "02 June 2025",
              title: "Why colorful vegetables are essential in your diet",
              content:
                "Colorful veggies not only brighten your plate but also boost your health with essential nutrients and antioxidants.",
              img: "https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?b=1&s=612x612&w=0&k=20&c=Xy80cP0SvyaaWPpZInnt3Ioib1Wff3xQSBBrooT2nB4=",
            },
            {
              date: "02 June 2025",
              title: "The power of leafy greens in everyday meals",
              content:
                "Leafy greens like spinach and kale can greatly enhance your nutrition and are easy to add to any dish.",
              img: "https://thumbs.dreamstime.com/b/fresh-green-leafy-vegetables-assortment-dark-background-panoramic-view-ai-generated-fresh-green-leafy-vegetables-assortment-341886774.jpg?w=992",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white w-72 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-500 block mb-1">{post.date}</span>
                <h3 className="text-base font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.content}</p>
                <a href="#" className="text-green-600 font-bold text-sm mt-3 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md font-bold mt-10 block mx-auto">
          All Trending
        </button>
      </section>
    </div>
  );
};

export default feedback;
