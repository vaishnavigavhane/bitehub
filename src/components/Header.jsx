import { motion } from "framer-motion";
import burgerImage from '../assets/images/burger-header.png';
import { NavLink } from "react-router-dom";

export const Header = () => {
    return(
          <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden g-gradient-to-br from-orange-100 via-white to-orange-50">
        {/* 🔮 Animated gradient glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,184,77,0.15),transparent_70%)] blur-3xl opacity-50"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <div className="relative container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 z-10">

          {/* 🧠 Left Section - Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 text-center md:text-left space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-[#1A1A1A]">
              <span className="text-orange-600">BiteHub</span> —
              Where Flavor Meets <span className="text-orange-500">Tech</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Dive into an experience where great taste meets sleek design.
              Order your favorites with one tap — fast, fun, and futuristic.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#restaurants"><motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg"
              >
                Order Now
              </motion.button>
                </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50"
              >
                <NavLink to="/restaurants/1">Explore Menu</NavLink>
              </motion.button>
            </div>
          </motion.div>

          {/* 🍕 Right Section - Animated Food 3D Style */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-orange-400 blur-[120px] opacity-40 rounded-full"></div>

              {/* Main Image */}
              <motion.img
                src={burgerImage}
                alt="Burger"
                className="relative z-10 w-72 md:w-96 drop-shadow-[0_0_40px_rgba(255,107,0,0.4)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Floating Side Dishes */}
              {/* <motion.img
              src="https://gallery.yopriceville.com/downloadfullsize/send/8631"
              alt="Pasta"
              className="absolute top-0 right-0 w-32 md:w-44 drop-shadow-xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.img
              src="https://gallery.yopriceville.com/downloadfullsize/send/8631"
              alt="Salad"
              className="absolute bottom-0 left-0 w-28 md:w-40 drop-shadow-xl"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity }}
            /> */}
            </motion.div>
          </div>
        </div>

        {/* 🫧 Floating particle dots for life */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-40"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [Math.random() * 800, -20],
                opacity: [0.3, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </section>
    )
}