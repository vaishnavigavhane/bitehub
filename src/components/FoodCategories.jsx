import { motion } from "framer-motion";
import pizzaImg from '../assets/images/pizza.jpg';
import burgerImg from '../assets/images/burger.jpg';
import chickenImg from '../assets/images/chicken.png';
import biryaniImg from '../assets/images/biryani.png';
import dessertImg from '../assets/images/desserts.jpg';
import southFoodImg from '../assets/images/south-food.png';

export const FoodCategories = () => {
  const categories = [
    {
      name: "Pizza",
      img: pizzaImg,
    },
    {
      name: "Burgers",
      img: burgerImg,
    },
    {
      name: "Chicken",
      img: chickenImg,
    },
    {
      name: "Desserts",
      img:  dessertImg,
    },
    {
      name: "Biryani",
      img: biryaniImg,
    },
    {
      name: "South Indian",
      img: southFoodImg,
    },
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
          Explore by <span className="text-orange-600">Category</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Quick picks for every craving 🍕🍔🍣
        </p>
      </div>

      {/* Categories Row */}
      <div className="flex justify-center gap-10 flex-wrap  px-6 md:px-20">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center group cursor-pointer"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg border-4 border-gray-700 group-hover:border-orange-500 transition-all duration-300">
              <motion.img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              {cat.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
