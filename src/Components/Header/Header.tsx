import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import bqk from "../../assets/bqk__.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <img src={bqk} alt="bqk" className="w-36 object-contain hidden md:block" />

        <ul className="hidden md:flex items-center gap-6 font-semibold text-[18px]">
          <li><Link to="/">Əsas səhifə</Link></li>
          <li><Link to="/about">Haqqımızda</Link></li>
          <li><Link to="/service">Xidmətlər</Link></li>
          <li><Link to="/contact">Əlaqə</Link></li>
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl  "
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

     <div
  className={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-1200 ease bg-white px-6 flex flex-col items-center text-center ${
    isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
  }`}
>
  <img src={bqk} alt="bqk" className="w-36 object-contain mb-4" />
  <ul className="flex flex-col gap-4 text-[18px] font-semibold">
    <li><Link to="/" onClick={closeMenu}>Əsas səhifə</Link></li>
    <li><Link to="/about" onClick={closeMenu}>Haqqımızda</Link></li>
    <li><Link to="/service" onClick={closeMenu}>Xidmətlər</Link></li>
    <li><Link to="/contact" onClick={closeMenu}>Əlaqə</Link></li>
  </ul>
</div>
    </header>
  );
};

export default Header;
