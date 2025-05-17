import { Link } from "react-router";
import bqk from "../../assets/bqk__.png";
import Dropdown from "../Dropdown/Dropdown";
import { useEffect } from "react";
interface HeaderMenuProps {
  setShowServices: (value: boolean) => void;
  showServices: boolean;
  isOpen: boolean;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({  setShowServices, showServices, isOpen }) => {
  useEffect(() => {
  if (!isOpen) {
    setShowServices(false);
  }
}, [isOpen, setShowServices]);

  return (
    <div
      className={`md:hidden overflow-hidden bg-white px-6 flex flex-col items-center text-center
        transition-[max-height,opacity,padding] duration-700 ease-out
        ${isOpen ? "max-h-auto opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
      `}
    >
      {/* Logo */}
      <img src={bqk} alt="bqk" className="w-36  my-4" />

      <ul className="flex flex-col gap-4 text-[18px] font-semibold w-full">
        <li>
          <Link to="/">Əsas səhifə</Link>
        </li>
        <li>
          <Link to="/haqqımızda">Haqqımızda</Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setShowServices(!showServices)}
            className="cursor-pointer font-semibold text-[18px] hover:text-[#1d4ed8]"
          >
            Xidmətlər
          </button>

          {/* Burada Dropdown-u həmişə DOM-da saxlayırıq, animasiyanı CSS ilə idarə edirik */}
          <div
            className={`overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out
            ${showServices ? "max-h-auto opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-3"}
            `}
          >
            <Dropdown />
          </div>
        </li>
        <li>
          <Link to="/əlaqə">Əlaqə</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
