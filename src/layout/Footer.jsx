import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-600 ">
      {/* 🌊 Top Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.24c58-10.79,114.16-30.13,172-41.91C626.09,1.13,683.52-2.05,739.16,7.9c54.71,9.85,104.19,30.33,158.28,39.89,52.48,9.25,108,6.58,159.56-5.1V120H0V52.48A600.21,600.21,0,0,0,321.39,56.24Z"
            fill="url(#waveGradientTop)"
          />
          <defs>
            <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb26b" />
              <stop offset="100%" stopColor="#ff7b54" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 🧡 Footer Content */}
      <div className="relative bg-[#fff7f2] border-t border-orange-200 pt-28 pb-16 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b54] to-[#ffb26b] mb-2">
              BiteHub
            </h2>
            <p className="text-[#555] text-sm leading-relaxed max-w-sm">
              Delicious food delivered fresh — made with love and speed.  
              Taste joy in every bite 🍝
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center md:justify-start gap-10"
          >
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-[#555]">
                {["Home", "Menu", "About", "Contact"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-[#ff7b54] transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-[#555]">
                {["FAQs", "Privacy Policy", "Terms", "Help Center"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-[#ff7b54] transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="font-semibold text-gray-800 mb-3">
              Stay in the loop
            </h3>
            <p className="text-[#555] text-sm mb-4">
              Subscribe to get tasty updates & exclusive offers!
            </p>
            <div className="flex items-center bg-white border border-orange-200 rounded-full overflow-hidden shadow-sm w-full md:w-72 mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-gradient-to-r from-[#ff7b54] to-[#ffb26b] text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-200 my-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#555]">
          <p>
            © {new Date().getFullYear()} <b className="text-[#ff7b54]">BiteHub</b>. 
            All rights reserved.
          </p>

          <div className="flex gap-5">
            {[
              { Icon: Facebook, color: "#1877f2" },
              { Icon: Instagram, color: "#e4405f" },
              { Icon: Twitter, color: "#1da1f2" },
              { Icon: Youtube, color: "#ff0000" },
            ].map(({ Icon, color }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.15, color }}
                className="text-gray-600 hover:text-[#ff7b54] transition-colors"
                href="#"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* 🌊 Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83c-53.09-12.12-104.72-29.9-158.28-40.17C779.1,41.68,726,38.61,672.05,44.12c-54,5.61-106.31,19.53-160.64,29.05C416.81,83.2,358.5,86.81,300.54,80.47c-57.18-6.22-113.2-22.92-170.52-30C82.7,45.92,41.41,44.18,0,49.55V120H1200V94.36C1142.86,103,1090.32,105.43,985.66,92.83Z"
            fill="url(#waveGradientBottom)"
          />
          <defs>
            <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7b54" />
              <stop offset="100%" stopColor="#ffb26b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};


