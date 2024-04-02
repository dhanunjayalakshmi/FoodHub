import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://mir-s3-cdn-cf.behance.net/projects/404/c0989e124298197.Y3JvcCwyNDA4LDE4ODQsMTMxLDA.jpg"
        alt="FoodHub"
        className="logo"
      />
      <ul className="navbar">
        <li>search</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const FoodOptions = () => {
  return <div className="foodOptions">Food Options</div>;
};

const RestaurantOptions = () => {
  return <div className="restOptions">Restaurant Options</div>;
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/ccbe50c2-ba6d-44d7-b9cd-683b018d88e6_118745.jpg"
        alt="Food"
        className="food"
      />
      <p className="res-name">McDonald's</p>
      <p className="res-rating">4.2 stars</p>
      <p className="res-delivery-time">45-50 mins</p>
      <p className="res-items">Burgers, beverages, Cafe, Desserts</p>
      <p className="res-location">Kondapur</p>
    </div>
  );
};

const Restaurants = () => {
  return (
    <div className="restaurants">
      <h2>Restaurants with online food delivery in your area</h2>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {/* <FoodOptions />
      <RestaurantOptions /> */}
      <Restaurants />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
