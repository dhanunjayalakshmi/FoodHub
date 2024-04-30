import FoodOptions from "./FoodOptions";
import RestaurantOptions from "./RestaurantOptions";
import Restaurants from "./Restaurants";

const Body = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <FoodOptions />
        <RestaurantOptions /> */}
      <Restaurants />
    </div>
  );
};

export default Body;
