import FoodOptions from "./FoodOptions";
import RestaurantOptions from "./RestaurantOptions";
import Restaurants from "./Restaurants";

const Body = () => {
  return (
    <div className="w-full flex-1 flex-col overflow-y-auto my-2 justify-center items-center">
      {/* <FoodOptions />
        <RestaurantOptions /> */}
      <Restaurants />
    </div>
  );
};

export default Body;
