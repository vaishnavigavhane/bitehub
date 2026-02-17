import { Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { IoStar } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from '../assets/images/Restaurant Banner.png';
import Logo from '../assets/images/logo.png';

export default function RestaurantMenu() {
    const [api, setApi] = useState([]);
    const {resID} = useParams();
   const fetchRestaurantApi = async() => {
    try{
        const res = await fetch("/Restaurants.json");
        const data = await res.json();
        setApi(data);
    }catch(error){
        console.log(error);
    }
}
  useEffect(()=>{
    fetchRestaurantApi()
  },[])

    const restaurant = api.find(r => r.resID === Number(resID));

    if (!restaurant) {
  return <h1 className="text-center py-20  text-gray-600">Loading restaurant...</h1>;
}

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     
         <div 
        className="relative h-64 md:h-80 bg-cover bg-center rounded-b-3xl overflow-hidden"
        style={{ backgroundImage: `url(${Banner})`}}
      >
        <div className="absolute inset-0  flex flex-col justify-end p-6 text-white">
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="logo"
              className="w-20 h-20 rounded-full border-4 border-gray-50"
            />
            <div>
              <h1 className="text-3xl font-bold text-orange-700">{restaurant.name}</h1>
              <div className="flex items-center gap-2 font-bold text-orange-800">
                <Star size={16} />
                <span>{restaurant.rating} • {restaurant.deliveryTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     

      {/* Category Tabs */}
      <div className="flex gap-3 overflow-x-auto px-4 py-3 sticky top-0 bg-white shadow-sm z-10">
        {["All", "Burgers", "Pizza", "Drinks", "Desserts"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full text-sm font-medium bg-orange-600 text-white hover:bg-orange-700 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
    
        
<div className="relative max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-14 lg:grid-cols-4 gap-10">
        {restaurant.menu?.map ((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-[#fff7f2] backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group border border-transparent hover:border-[#ffb26b]/40"
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





      
    </div>
  );
}
