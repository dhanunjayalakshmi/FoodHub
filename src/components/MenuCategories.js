import React, { useState } from "react";
import MenuItems from "./MenuItems";

const MenuCategories = ({ category }) => {
  const [showItems, setShowItems] = useState(false);

  const { itemCards, title } = category;

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between cursor-pointer my-2"
        onClick={handleClick}
      >
        <h2 className="text-xl font-bold mt-4">
          {title} ({itemCards?.length})
        </h2>
        <p className="text-2xl pt-4 font-bold">{showItems ? "⌃" : "⌄"}</p>
      </div>
      {showItems &&
        itemCards?.map((itemCard) => (
          <MenuItems
            key={itemCard?.card?.info?.id}
            itemCard={itemCard?.card?.info}
          />
        ))}
    </div>
  );
};

export default MenuCategories;
