import { motion } from "framer-motion";
import { IoStar } from "react-icons/io5";
import restaurants from '../../public/Restaurants.json';
import { NavLink } from "react-router-dom";

export const RestaurantCard = () => {


  return (
    <section className="py-24 bg-white relative overflow-hidden" id="restaurants">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Discover <span className="text-orange-600">Top Spots</span> Near You
        </h2>
        <p className="text-gray-600 mt-2">
          Premium picks that combine taste, vibes, and great delivery 🍴
        </p>
      </div>

      {/* Grid - 3 per row */}
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {restaurants.map((restaurant, i) => (
          <motion.div
            key={restaurant.resID}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            {/* Top image */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            </div>

            {/* Bottom Info */}
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                </div>
                <div className="flex items-center gap-1 text-orange-600 font-semibold">
                  <IoStar className="text-lg" /> <span>{restaurant.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                {restaurant.desc}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700 text-sm">
                  ⏱ {restaurant.deliveryTime}
                </span>
              <NavLink to = {`/restaurants/${restaurant.resID}`}>
                  <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all">
                  View Menu
                </button>
              </NavLink>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

     
    </section>
  );
}
