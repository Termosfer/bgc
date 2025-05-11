import { Link, useLocation } from "react-router-dom";
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
        {
          <ul className="hidden md:flex items-center gap-6 font-semibold text-[18px]">
            <li>
              <Link to="/">Əsas səhifə</Link>
            </li>
            <li>
              <Link to="/haqqımızda">Haqqımızda</Link>
            </li>
            {
              <li>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="cursor-pointer font-semibold text-[18px] "
                >
                  Xidmətlər
                </button>
              </li>
            }
            <li>
              <Link to="/əlaqə">Əlaqə</Link>
            </li>
          </ul>
        }

        <button onClick={toggleMenu} className="md:hidden text-2xl  ">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {showServices && <Dropdown />}

      <HeaderMenu
        showServices={showServices}
        setShowServices={setShowServices}
        isOpen={isOpen}
      />
    </header>
  );
};

export default Header;
