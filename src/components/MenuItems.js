import React from "react";
import { CDN_URL } from "../utils/constants";

const MenuItems = ({ itemCard }) => {
  const {
    name,
    description,
    itemAttribute,
    ratings,
    imageId,
    price,
    defaultPrice,
  } = itemCard;

  return (
    <div className="w-full">
      <div className="w-full flex gap-8 my-4">
        <div className="w-9/12 flex flex-col">
          <p className="font-bold text-md p-1">
            {itemAttribute?.vegClassifier === "VEG" ? "🟢" : "🔴"}
          </p>
          <p className="font-bold text-md p-1">{name}</p>
          <p className="font-bold text-md p-1">
            ₹ {defaultPrice ? defaultPrice / 100 : price / 100}
          </p>
          {ratings?.aggregatedRating?.rating && (
            <p className="text-md p-1">
              ⭐ {ratings?.aggregatedRating?.rating} (
              {ratings?.aggregatedRating?.ratingCountV2})
            </p>
          )}
          <p className="text-md p-1">{description}</p>
        </div>
        <div className="w-3/12 my-2 relative">
          <button
            type="button"
            className={`absolute text-md text-green-500 bg-white font-bold border-2 px-4 py-1 rounded-lg mx-12 ${
              imageId ? "my-32" : "my-16"
            }`}
          >
            ADD
          </button>
          <div className="w-40 h-36">
            {imageId && (
              <img
                className="w-full h-full object-cover rounded-xl"
                src={CDN_URL + imageId}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-px mt-6 bg-gray-300"></div>
    </div>
  );
};

export default MenuItems;
