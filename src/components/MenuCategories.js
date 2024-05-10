import React from "react";
import MenuItems from "./MenuItems";

const MenuCategories = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between cursor-pointer">
        <h2 className="text-xl font-bold mt-4">Recommended (14)</h2>
        <p className="text-2xl font-bold">⌄</p>
      </div>
      <MenuItems />
      <MenuItems />
      <MenuItems />
      <MenuItems />
    </div>
  );
};

export default MenuCategories;
