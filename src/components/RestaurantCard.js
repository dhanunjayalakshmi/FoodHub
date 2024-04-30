const RestaurantCard = () => {
  return (
    <div className="w-ful flex flex-col rounded-xl">
      <div class="w-full h-72 overflow-hidden relative rounded-xl">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/be187af1-ae9b-46e7-ad51-57cec58fbb2f_256893.jpg"
          alt="Food"
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full min-h-full object-cover "
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        <p className="absolute bottom-0 left-0  text-white text-xl font-bold m-1 p-2">
          20% OFF UPTO 50
        </p>
      </div>

      <div className="p-2">
        <p className="px-2 text-xl font-bold">McDonald's</p>
        <p className="px-2 font-bold">4.2 stars . 45-50 mins</p>
        <p className="px-2">Burgers, beverages, Cafe, Desserts</p>
        <p className="px-2">Kondapur</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
