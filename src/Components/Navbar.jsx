import { FaHome } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-20 mx-auto px-4 max-w-[1240px] text-white sticky top-0 backdrop-blur-md border-b border-gray-700">

      <div className="flex justify-between w-full items-center">
      <h1 className="text-3xl font-bold text-[#00df9a]">Bizsite</h1>
      <div className="flex justify-center items-center">

        <a href="#home" className="p-7 hover:text-[#00df9a] cursor-pointer">
          <div className="flex items-center gap-1">
          <FaHome />
          <h3 className="hidden md:block">Home</h3>
            
          </div>
        </a>
        <a href="#company" className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaBuildingUser />
        <h3 className="hidden md:block">Company</h3>
            </div>
        </a>

        <a href="#resources" className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaBookOpenReader />
        <h3 className="hidden md:block">Resources</h3>
          </div>
          </a>
        <a href="#about" className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaExclamationTriangle />
        <h3 className="hidden md:block">About</h3>
          </div>
          </a>
        <a href="#contacts" className="p-7 hover:text-[#00df9a] cursor-pointer">
        <div className="flex items-center gap-1">
        <FaRegUserCircle />
        <h3 className="hidden md:block">Contacts</h3>
          </div>
          </a>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
