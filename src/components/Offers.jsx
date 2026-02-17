import { motion } from "framer-motion";

export const Offers = () => {
  const deals = [
    { text: "🔥 50% OFF on Your First Order", color: "from-orange-500 to-yellow-400" },
    { text: "🍔 Buy 1 Get 1 Free on Burgers", color: "from-pink-500 to-rose-400" },
    { text: "🚚 Free Delivery on Orders Above ₹399", color: "from-emerald-400 to-teal-300" },
    { text: "🍕 30% OFF on Pizza Combos", color: "from-indigo-400 to-blue-400" },
    { text: "🥗 Flat ₹200 Cashback on Healthy Bowls", color: "from-purple-500 to-fuchsia-400" },
  ];

  return (
    <section className="relative container py-6 pb-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Today’s Hot <span className="text-orange-600">Deals 🔥</span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Unwrap exclusive offers crafted just for our BiteHub foodies.
        </p>
      </div>

      {/* Moving Neon Strip */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...deals, ...deals].map((deal, index) => (
            <div
              key={index}
              className={`px-8 py-3 rounded-full text-white font-semibold text-base shadow-md bg-gradient-to-r ${deal.color} hover:scale-105 transform transition duration-300`}
            >
              {deal.text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Glow behind strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-100 blur-[100px] opacity-40"></div>
    </section>
  );
};
