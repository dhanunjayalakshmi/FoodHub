import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="w-full flex justify-center py-4 shadow-md">
      <div className="flex justify-between items-center w-full max-w-3xl gap-12">
        <div className="cursor-pointer">
          <Link to="/">
            <img src={LOGO_URL} alt="FoodHub" className="w-8" />
          </Link>
        </div>

        <ul className="flex gap-12 text-bold text-lg">
          {/* <li>Location</li> */}
          <li className="hover:text-[#f26921]">Search</li>
          <li className="hover:text-[#f26921]">About Us</li>
          <li className="hover:text-[#f26921]">Contact Us</li>
          <li className="hover:text-[#f26921]">Cart</li>
          <li className="hover:text-[#f26921]">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
