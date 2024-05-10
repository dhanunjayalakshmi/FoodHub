import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const fetchRestaurantsData = async () => {
    const restaurantsData = await fetch(RESTAURANTS_API);
    const json = await restaurantsData.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="w-[80%] font-bold text-2xl mx-2 my-4 px-1 py-4">
        Restaurants with online food delivery in your area
      </h2>
      <div className="w-[80%] grid grid-cols-4 gap-8 mx-auto">
        {listOfRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
