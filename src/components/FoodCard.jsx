import { motion } from "framer-motion";
import { IoStar } from "react-icons/io5";
import foodCardData from '../../public/FoodCardData.json';



export const FoodCard = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Floating gradient blobs for background aesthetic */}
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-[#ffb26b]/30 blur-3xl rounded-full animate-pulse-slow"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff7b54]/20 blur-3xl rounded-full animate-pulse-slow"></div> */}

      {/* Title */}
      <div className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-800 drop-shadow-sm"
        >
          Our Special Dishes 🍴
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-3 text-lg"
        >
          Crafted with love. Served with passion. 💛
        </motion.p>
      </div>

      {/* Food Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {foodCardData.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-[#fff7f2] backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group border border-transparent hover:border-[#ffb26b]/40"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Rating badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-medium text-gray-800 shadow-md">
                <IoStar className="w-4 h-4 text-orange-600" /> {item.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                {item.name}
              </h3>

              {/* Price + Add button */}
              <div className="flex items-center justify-between">
                <p className="text-[#ff7b54] text-xl font-extrabold">
                  {item.price}
                </p>
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  className="bg-gradient-to-r from-[#ff7b54] to-[#ffb26b] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                >
                  Add +
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
