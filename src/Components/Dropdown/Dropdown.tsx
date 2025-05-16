import { Link } from "react-router";

const Dropdown = () => {
  return (
    <ul className="absolute right-0 top-20 flex flex-col bg-white shadow-lg text-black mt-2  rounded-lg z-20 space-y-2">
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/audit">Audit xidməti</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/mühasibat">Mühasibat uçotu</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/vergi">Vergitutma</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/hr">İnsan Resursları (HR) üzrə xidmətlər</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/maliyyə">Maliyyə xidmətləri</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/hüquq">Hüquq xidmətləri</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/1c-proqramı">1C Müəssisə proqramı üzrə xidmətlər</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/qida">Qida Təhlükəsizliyi</Link>
      </li>
      <li className="py-1 hover:bg-gray-100 rounded  transition-colors duration-200 px-2">
        <Link to="/satınalma">Dövlət satınalmaları</Link>
      </li>
    </ul>
  );
};

export default Dropdown;
