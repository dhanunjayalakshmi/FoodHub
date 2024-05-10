import React from "react";

const MenuItems = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between my-4">
        <div className="flex flex-col">
          <p className="font-bold text-sm p-1">Item type</p>
          <p className="font-bold text-sm p-1">Item Name</p>
          <p className="font-bold text-sm p-1">Item Price</p>
          <p className="text-sm p-1">Item Rating</p>
          <p className="text-sm p-1">Item Description</p>
        </div>
        <div className="my-2">
          <img
            className="w-40 rounded-xl"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/kwj0buclynruoihcq1og"
            alt=""
          />
        </div>
      </div>
      <div class="w-full h-px my-2 bg-gray-300"></div>
    </div>
  );
};

export default MenuItems;
