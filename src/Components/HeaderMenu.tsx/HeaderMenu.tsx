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
    <>
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-1200 ease bg-white px-6 flex flex-col items-center text-center ${
          isOpen ? "max-h-[1000px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <img src={bqk} alt="bqk" className="w-36 object-contain mb-4" />
        <ul className="flex flex-col gap-4 text-[18px] font-semibold">
          <li>
            <Link to="/" >
              Əsas səhifə
            </Link>
          </li>
          <li>
            <Link to="/haqqımızda" >
              Haqqımızda
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setShowServices(!showServices)}
              className="cursor-pointer font-semibold text-[18px] hover:text-[#1d4ed8]"
            >
              Xidmətlər
            </button>
            {showServices && (
              <div className="mt-2">
                <Dropdown />
              </div>
            )}
          </li>
          <li>
            <Link to="/əlaqə" >
              Əlaqə
            </Link>
          </li>
        </ul>
       
      </div>
    </>
  );
};

export default HeaderMenu;
