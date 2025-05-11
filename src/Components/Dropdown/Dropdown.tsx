import { Link } from "react-router"

const Dropdown = () => {
  return (
    <ul className="absolute right-0 top-20 flex flex-col bg-white shadow-lg text-black mt-2 p-4 rounded-lg z-20 space-y-2">
                <li className="py-1">
                  <Link to="/audit">
                    Audit xidməti
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/muhasibat">
                    Mühasibat uçotu
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/vergi">
                    Vergitutma
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/hr">
                    İnsan Resursları (HR) üzrə xidmətlər
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/maliyye">
                    Maliyyə xidmətləri
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/huquq">
                    Hüquq xidmətləri
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/meslehet">
                    Məsləhət xidməti
                  </Link>
                </li>
              </ul>
  )
}

export default Dropdown