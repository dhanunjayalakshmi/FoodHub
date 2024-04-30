const Header = () => {
  return (
    <div className="w-full flex justify-center py-4 shadow-md">
      <div className="flex justify-between items-center w-full max-w-3xl gap-12">
        <div>
          <img
            src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
            alt="FoodHub"
            className="w-8"
          />
        </div>

        <ul className="flex gap-12 text-bold text-lg">
          {/* <li>Location</li> */}
          <li>Search</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
