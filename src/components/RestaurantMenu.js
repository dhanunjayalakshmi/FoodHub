import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuCategories from "./MenuCategories";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

  useEffect(() => {
    // fetchUpdatedRestaurants();
  }, []);

  // const fetchUpdatedRestaurants = async () => {
  //   const url = "https://www.swiggy.com/dapi/restaurants/list/update";
  //   const payload = {
  //     lat: 17.4700319,
  //     lng: 78.3534174,
  //     nextOffset: "COVCELQ4KIDol7vlkv2sVjCnEzgC",
  //     widgetOffset: {
  //       NewListingView_category_bar_chicletranking_TwoRows: "",
  //       NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //       Restaurant_Group_WebView_PB_Theme: "",
  //       Restaurant_Group_WebView_SEO_PB_Theme: "",
  //       collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
  //       inlineFacetFilter: "",
  //       restaurantCountWidget: "",
  //     },
  //     filters: {},
  //     seoParams: {
  //       seoUrl: "https://www.swiggy.com/",
  //       pageType: "FOOD_HOMEPAGE",
  //       apiName: "FoodHomePage",
  //     },
  //     page_type: "DESKTOP_WEB_LISTING",
  //     _csrf: "glfTvQDvgZxT-OgzZ7IaZDa04gl84Dplq-3MZqAQ",
  //   };

  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "CSRF-Token": payload._csrf, // Include CSRF token if necessary
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await response.json();
  //     console.log(data); // Log or process your updated data here
  //   } catch (error) {
  //     console.error("Failed to fetch updated restaurants:", error);
  //   }
  // };

  return (
    <div className="w-[30%] flex flex-col mx-auto my-4">
      <div className="my-4 flex flex-col">
        <h2 className="text-2xl font-bold py-4">Res Name</h2>
        <div className="p-4 rounded-3xl bg-[#e2e2e9]">
          <div className="flex flex-col py-2 bg-white rounded-3xl shadow-2xl shadow-neutral-400 text-sm">
            <p className="px-4 py-1 font-bold">rating - Price</p>
            <p className="px-4 py-1 font-bold text-[#f26921]">Cuisines</p>
            <p className="px-4 py-1 font-bold">Location</p>
            <p className="px-4 py-1 font-bold">Delivery time</p>
            <div className="w-full h-px my-2 bg-gray-200"></div>
            <p className="px-4 py-1 text-gray-500">
              Far (6.4 kms) | Additional delivery fee will apply
            </p>
          </div>
        </div>
      </div>
      <div className="w-full my-4 flex flex-col">
        <MenuCategories />
        <MenuCategories />
        <MenuCategories />
        <MenuCategories />
      </div>
    </div>
  );
};

export default RestaurantMenu;
