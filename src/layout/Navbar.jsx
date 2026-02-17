import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-600 shadow-lg ">
      <div className="container flex justify-between items-center py-4">
        <div className="logo text-white text-3xl font-bold">
          <NavLink to = "/">
            Bite<span className="text-gray-800">Hub🍴</span>
          </NavLink>
        </div>
        <div className="relative w-1/3 search">
          <input
            type="search"
            placeholder="Search for restaurants or dishes..."
            className="w-full px-4 py-2 rounded-3xl bg-white text-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700 shadow-sm"
          />
          {/* Search Icon (optional) */}
          <span className="absolute right-3 top-1.5 text-gray-500">
            <IoSearchOutline className="text-2xl" />
          </span>
        </div>
        <div className="profile flex gap-10 justify-center">
          <GrCart className="text-3xl text-white cursor-pointer" />
          <CgProfile  className="text-3xl text-white cursor-pointer"/>
        </div>
      </div>
    </nav>

  )
}
