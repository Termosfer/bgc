import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import bqk from "../../assets/bqk__.png";
import Dropdown from "../Dropdown/Dropdown";
import HeaderMenu from "../HeaderMenu.tsx/HeaderMenu";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showServices, setShowServices] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setShowServices(false);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <img
          src={bqk}
          alt="bqk"
          className="w-36 object-contain hidden md:block"
        />
        <ul className="hidden md:flex items-center gap-6 font-semibold text-[18px]">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-colors duration-200 border-b-2 ${
                  isActive
                    ? "border-[#fccd00] text-[#fccd00]"
                    : "border-transparent hover:border-[#fccd00] hover:text-[#fccd00]"
                }`
              }
            >
              Əsas səhifə
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/haqqımızda"
              className={({ isActive }) =>
                `transition-colors duration-200 border-b-2 ${
                  isActive
                    ? "border-[#fccd00] text-[#fccd00]"
                    : "border-transparent hover:border-[#fccd00] hover:text-[#fccd00]"
                }`
              }
            >
              Haqqımızda
            </NavLink>
          </li>
          <li className="relative group">
            <button className="cursor-pointer font-semibold text-[18px] border-b-2 border-transparent hover:border-[#fccd00] hover:text-[#fccd00] transition-colors duration-200">
              Xidmətlər
            </button>

            <div className="text-nowrap absolute top-6  -left-45 mt-1 z-10 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              <Dropdown />
            </div>
          </li>
          <li>
            <NavLink
              to="/əlaqə"
              className={({ isActive }) =>
                `transition-colors duration-200 border-b-2 ${
                  isActive
                    ? "border-[#fccd00] text-[#fccd00]"
                    : "border-transparent hover:border-[#fccd00] hover:text-[#fccd00]"
                }`
              }
            >
              Əlaqə
            </NavLink>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>


      <HeaderMenu
        showServices={showServices}
        setShowServices={setShowServices}
        isOpen={isOpen}
      />
    </header>
  );
};

export default Header;
