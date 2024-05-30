import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store?.cart?.cartItems);

  return (
    <div className="w-full fixed top-0 flex justify-center py-4 shadow-md z-30 bg-white">
      <div className="flex justify-between items-center w-full max-w-3xl gap-12">
        <div className="cursor-pointer">
          <Link to="/">
            <img src={LOGO_URL} alt="FoodHub" className="w-8" />
          </Link>
        </div>

        <ul className="flex gap-12 text-bold text-lg">
          {/* <li>Location</li> */}
          <li className="cursor-pointer font-medium text-[#171717] hover:text-[#f26921]">
            Search
          </li>
          <li className="cursor-pointer font-medium text-[#171717] hover:text-[#f26921]">
            About Us
          </li>
          <li className="cursor-pointer font-medium text-[#171717] hover:text-[#f26921]">
            Contact Us
          </li>
          <li className="group cursor-pointer font-medium text-[#171717] hover:text-[#f26921]">
            Cart{" "}
            <span className="items-center text-white px-1 bg-green-600 group-hover:bg-[#f26921]">
              {cartItems?.length}
            </span>
          </li>
          <li className="cursor-pointer font-medium text-[#171717] hover:text-[#f26921]">
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
