import React, { usestate } from "react";
import { FaHome } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Bizsite</h1>
      <ul className="flex">

        <li className="p-7 hover:text-[#00df9a] cursor-pointer">
          <div className="flex items-center gap-1">
          <FaHome />
          <h3 className="hidden md:block">Home</h3>
            
          </div>
        </li>
        <li className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaBuildingUser />
        <h3 className="hidden md:block">Company</h3>
            </div>
        </li>

        <li className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaBookOpenReader />
        <h3 className="hidden md:block">Resources</h3>
          </div>
          </li>
        <li className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaExclamationTriangle />
        <h3 className="hidden md:block">About</h3>
          </div>
          </li>
        <li className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaRegUserCircle />
        <h3 className="hidden md:block">Contacts</h3>
          </div>
          </li>
      </ul>
      
    </div>
  );
}

export default Navbar;
