import RestaurantCard from "./RestaurantCard";

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

export default Restaurants;
