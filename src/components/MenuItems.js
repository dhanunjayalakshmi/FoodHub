import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItems = ({ itemCard, setShowDialog, restaurantInfo }) => {
  const dispatch = useDispatch();
  const { resId } = useParams();
  const {
    name,
    description,
    itemAttribute,
    ratings,
    imageId,
    price,
    defaultPrice,
  } = itemCard;

  const cartResId = useSelector((store) => store?.cart?.cartResId);

  const count = useSelector(
    (store) =>
      store?.cart?.cartItems?.filter((obj) => obj["id"] === itemCard?.id)
        ?.length
  );

  const handleAddItem = () => {
    if (cartResId == resId || cartResId == null)
      dispatch(addItem({ itemCard, resId, restaurantInfo }));
    else setShowDialog(true);
  };

  const handleRemoveItem = () => {
    dispatch(removeItem({ key: "id", value: itemCard?.id }));
  };

  return (
    <div className="w-full">
      <div className="w-full flex gap-4 my-4">
        <div className="w-9/12 flex flex-col">
          <span
            className={`w-8 font-bold text-sm p-1 border-2 ${
              itemAttribute?.vegClassifier === "VEG"
                ? "border-[#7cb342]"
                : "border-[#f44336]"
            }`}
          >
            {itemAttribute?.vegClassifier === "VEG" ? "🟢" : "🔴"}
          </span>
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
        <div className="w-3/12 flex justify-end my-2 relative">
          {count > 0 ? (
            <div
              className={`flex justify-between items-center absolute w-28 text-lg text-green-500 bg-white font-semibold border-2 rounded-lg mx-6 ${
                imageId ? "my-32" : "my-16"
              }`}
            >
              <button
                onClick={handleRemoveItem}
                className="w-[30%] cursor-pointer px-2 py-1 hover:bg-[#dddddd]"
              >
                -
              </button>
              <span className="px-2 py-1">{count}</span>
              <button
                onClick={handleAddItem}
                className="w-[30%] cursor-pointer px-2 py-1 hover:bg-[#dddddd]"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAddItem}
              className={`absolute w-24 text-md text-green-500 bg-white font-bold border-2 px-2 py-1 rounded-lg mx-7 ${
                imageId ? "my-32" : "my-16"
              } hover:bg-[#dddddd]`}
            >
              ADD
            </button>
          )}

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
