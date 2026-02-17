import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import profileImg from '../assets/images/profile-img.png';


export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      text: "BiteHub makes food ordering feel effortless. The design and experience are simply unmatched.",
      img: "https://cdn-icons-png.flaticon.com/512/10542/10542498.png",
      rating: 5,
    },
    {
      name: "Priya Nair",
      text: "Clean UI, fast delivery, and tasty food. This app sets the bar high for others.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      text: "Every time I open BiteHub, it feels premium. Even the animations make me hungry!",
      img: "https://randomuser.me/api/portraits/men/28.jpg",
      rating: 4,
    },
    {
      name: "Isha Kapoor",
      text: "I love how easy it is to reorder my favorite meals. BiteHub is my go-to comfort food app!",
      img: "https://randomuser.me/api/portraits/women/66.jpg",
      rating: 5,
    },
    {
      name: "Rohan Patel",
      text: "They really care about user experience. The app is smooth, responsive, and full of personality.",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      text: "BiteHub always surprises me with new offers and dishes. It’s addictive in the best way.",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const next = () => {
    if (index < testimonials.length - visibleCards) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          What People <span className="text-orange-600">Are Saying</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Real stories from customers who can’t stop loving BiteHub 🍔✨
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 relative">
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`flex-shrink-0 p-3 md:p-4 rounded-full border border-orange-200 shadow-md bg-white hover:bg-orange-100 transition ${
              index === 0 && "opacity-40 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft className="text-orange-600 text-lg sm:text-xl" />
          </button>

          {/* Slider container */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-10"
              animate={{ x: `-${index * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="border border-orange-100 rounded-3xl flex flex-col items-center p-6 sm:p-8 text-center flex-shrink-0 w-[90%] sm:w-[45%] md:w-[30%] mx-auto bg-white shadow-sm"
                >
                  <img
                    src={profileImg}
                    alt={t.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-orange-200 object-cover mb-4"
                  />
                  <p className="text-gray-700 text-sm sm:text-base italic mb-4 leading-relaxed">
                    “{t.text}”
                  </p>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900">
                    {t.name}
                  </h4>
                  <div className="flex justify-center mt-2 text-orange-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="text-sm sm:text-base" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={index >= testimonials.length - visibleCards}
            className={`flex-shrink-0 p-3 md:p-4 rounded-full border border-orange-200 shadow-md bg-white hover:bg-orange-100 transition ${
              index >= testimonials.length - visibleCards &&
              "opacity-40 cursor-not-allowed"
            }`}
          >
            <FaChevronRight className="text-orange-600 text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};
