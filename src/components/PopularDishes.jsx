import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const PopularDishes = () => {
  const dishes = [
    {
      name: "Shahi Paneer",
      image: "https://orders.popskitchen.in/storage/2024/09/image-185.png",
    },
    {
      name: "Mutton Biryani",
      image: "https://aromasofgolconda.com/cdn/shop/files/BiryaniImage.jpg?v=1745592985&width=1946",
    },
    {
      name: "Veg Manchurian",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuVt1m95biKV6-h8bMqR7Y67HWjfYYeRxaw&s",
    },
    {
      name: "Pav Bhaji",
      image: "https://learn.artsofindia.in/wp-content/uploads/2023/04/afb86c2c-d9a3-4845-9970-e1895bf7e174.jpg",
    },
    {
      name: "Crispy Onion Bhaji",
      image: "https://mymorningmocha.com/wp-content/uploads/2021/11/Crispy-onion-bhaji-recipe.jpg",
    },
     {
      name: "Chicken Curry",
      image: "https://static.vecteezy.com/system/resources/previews/054/328/132/non_2x/delectable-chicken-curry-dish-in-wooden-bowl-with-fresh-herbs-and-spices-png.png",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden py-20">
      {/* floating gradient lights */}
      <motion.div
        className="absolute top-[-10rem] left-[10%] w-72 h-72 bg-orange-300/40 rounded-full blur-[120px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-8rem] right-[5%] w-64 h-64 bg-pink-300/40 rounded-full blur-[120px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 gap-10">
        {/* Left text block */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            <span className="text-orange-600">BiteHub </span>
            <span className="relative">
               Favourites
              <motion.span
                className="absolute left-0 -bottom-2 w-24 h-[4px] bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>

          <p className="text-gray-700 max-w-md leading-relaxed">
             Craving what everyone’s raving about? Here are the crowd-favorite bites that keep our 
             foodies coming back for more!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-orange-700 transition"
          >
           <NavLink to="/restaurants/1">Explore the Menu</NavLink>
          </motion.button>
        </div>

        {/* Right: mosaic grid */}
        <div className="md:w-1/2 relative grid grid-cols-3 gap-5 md:gap-7">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 ${
                i % 2 === 0 ? "translate-y-4" : "-translate-y-2"
              }`}
            >
              <motion.img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
              <motion.h3
                className="absolute bottom-3 left-4 text-white text-lg font-semibold"
                whileHover={{ x: 4 }}
              >
                {dish.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
