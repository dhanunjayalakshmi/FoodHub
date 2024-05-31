import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    areaName,
    avgRating,
    costForTwo,
    cuisines,
    sla,
    aggregatedDiscountInfoV3,
  } = resData;

  return (
    <div className="w-ful flex flex-col rounded-xl cursor-pointer transition-transform duration-300 transform hover:scale-95">
      <div className="w-full h-72 overflow-hidden relative rounded-xl">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="Food"
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full min-h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        <p className="absolute bottom-0 left-0  text-white text-xl font-bold m-1 p-2">
          {aggregatedDiscountInfoV3
            ? aggregatedDiscountInfoV3?.header +
              " " +
              aggregatedDiscountInfoV3?.subHeader
            : ""}
        </p>
      </div>
      <div className="p-2">
        <p className="px-2 text-xl font-bold">{name}</p>
        <p className="px-2 font-bold">
          {avgRating} stars . {sla.slaString}
        </p>
        <p className="px-2">{cuisines.join(", ")}</p>
        <p className="px-2">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
