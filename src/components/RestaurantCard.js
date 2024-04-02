const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/ccbe50c2-ba6d-44d7-b9cd-683b018d88e6_118745.jpg"
        alt="Food"
        className="food"
      />
      <p className="res-name">McDonald's</p>
      <p className="res-rating">4.2 stars</p>
      <p className="res-delivery-time">45-50 mins</p>
      <p className="res-items">Burgers, beverages, Cafe, Desserts</p>
      <p className="res-location">Kondapur</p>
    </div>
  );
};

export default RestaurantCard;
