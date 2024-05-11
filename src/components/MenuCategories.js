import React, { useState } from "react";
import MenuItems from "./MenuItems";

const MenuCategories = () => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-xl font-bold mt-4">Recommended (14)</h2>
        <p className="text-2xl pt-4 font-bold">{showItems ? "⌃" : "⌄"}</p>
      </div>
      {showItems && (
        <>
          <MenuItems />
          <MenuItems />
          <MenuItems />
          <MenuItems />
        </>
      )}
    </div>
  );
};

export default MenuCategories;
