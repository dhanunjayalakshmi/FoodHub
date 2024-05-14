import React from "react";
import { useParams } from "react-router-dom";
import MenuCategories from "./MenuCategories";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // console.log(resInfo?.cards[0]?.card?.card?.text);
  console.log(resInfo?.cards[2]?.card?.card?.info);

  if (!resInfo) return;

  const {
    name,
    areaName,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwo,
    sla,
    availabilityServiceabilityMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categoryList =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (resCard) =>
        resCard?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-[30%] flex flex-col mx-auto my-4">
      <div className="my-4 flex flex-col">
        <h2 className="text-2xl font-bold py-4">{name}</h2>
        <div className="p-4 rounded-3xl bg-[#e2e2e9]">
          <div className="flex flex-col py-2 bg-white rounded-3xl shadow-2xl shadow-neutral-400 text-sm">
            <p className="px-4 py-1 font-bold">
              ⭐ {avgRatingString} ({totalRatingsString})
            </p>
            <p className="px-4 py-1 font-bold">₹{costForTwo / 100} for two</p>
            <p className="px-4 py-1 font-bold text-[#f26921]">
              {cuisines.join(", ")}
            </p>
            <p className="px-4 py-1 font-bold">{areaName}</p>
            <p className="px-4 py-1 font-bold">{sla?.deliveryTime}</p>
            <div className="w-full h-px my-2 bg-gray-200"></div>
            <p className="px-4 py-1 text-gray-500">
              {/* Far (6.4 kms) | Additional delivery fee will apply */}
              {availabilityServiceabilityMessage}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full my-4 flex flex-col">
        {categoryList?.map((category) => (
          <MenuCategories
            key={category?.card?.card?.itemCards?.card?.info?.id}
            category={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
