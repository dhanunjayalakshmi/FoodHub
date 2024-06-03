import FoodOptions from "./FoodOptions";
import RestaurantOptions from "./RestaurantOptions";
import Restaurants from "./Restaurants";

const Body = () => {
  return (
    <div className="w-full flex-1 flex-col overflow-y-auto my-2 justify-center items-center scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-gray-300">
      {/* <FoodOptions />
        <RestaurantOptions /> */}
      <Restaurants />
    </div>
  );
};

export default Body;
