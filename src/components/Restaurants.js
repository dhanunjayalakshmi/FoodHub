import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="w-[80%] font-bold text-2xl mx-2 my-4 px-1 py-4">
        Restaurants with online food delivery in your area
      </h2>
      {/* <div className="w-[80%] flex flex-wrap gap-4 justify-evenly mx-auto"> */}
      <div className="w-[80%] grid grid-cols-4 gap-8 mx-auto">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
