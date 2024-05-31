import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const [cartItemsInfo, setCartItemsInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((store) => store?.cart?.cartItems);
  const resId = useSelector((store) => store?.cart?.cartResId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
    navigate("/");
  };

  if (cartItems?.length === 0)
    return (
      <div className="w-[35%] pt-16 flex flex-col mx-auto my-4 relative">
        <div className="absolute w-full pt-32 flex flex-col items-center">
          <div className="w-[50%] ml-8">
            <img
              src="https://media.istockphoto.com/id/1369712605/vector/cooking-food-in-frying-pan-vector-illustration-of-cut-vegetables-cooked-on-gas-stove-cartoon.jpg?s=612x612&w=0&k=20&c=3H9TU5PosN-vYYFQCahK-RdA695_41QiT90n1re_0j0="
              alt=""
            />
          </div>
          <h4 className="text-slate-900 text-lg font-bold py-1">
            Your cart is empty
          </h4>
          <p className="text-md py-1">
            You can go to home page to view more restaurants
          </p>

          <Link to="/">
            <button className="text-white text-md font-semibold px-4 py-2 m-2 bg-[#fc8019] hover:shadow-xl">
              SEE RESTAUARNTS NEAR YOU
            </button>
          </Link>
        </div>
      </div>
    );

  const modifyCartItemsInfo = () => {
    const map = new Map();

    cartItems?.forEach((item) => {
      const key = JSON.stringify(item);

      if (map.has(key)) {
        map.set(key, { ...map.get(key), count: map.get(key).count + 1 });
      } else {
        const itemPrice = item?.defaultPrice
          ? item?.defaultPrice / 100
          : item?.price / 100;
        map.set(key, { ...item, count: 1, itemPrice: itemPrice });
      }
    });

    setCartItemsInfo(Array.from(map.values()));
  };

  useEffect(() => {
    modifyCartItemsInfo();
  }, [cartItems]);

  useEffect(() => {
    const amount = cartItemsInfo?.reduce((accumulator, item) => {
      return accumulator + item?.itemPrice * item?.count;
    }, 0);
    setTotal(amount);
  }, [cartItemsInfo]);

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return;

  const { name, areaName, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="w-[35%] pt-20 flex flex-col bg-white mx-auto my-4 relative">
      <div className="flex justify-between py-6 cursor-pointer">
        <Link to={`/restaurants/${resId}`}>
          {" "}
          <div className="flex justify-center gap-8 mx-4">
            <div className="w-24 h-20 relative overflow-hidden">
              <img
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full min-h-full object-cover"
                src={`${CDN_URL}${cloudinaryImageId}`}
                alt=""
              />
            </div>
            <div className="align-center">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-slate-700">{areaName}</p>
            </div>
          </div>
        </Link>
        <button
          onClick={handleClearCart}
          className="text-xl font-semibold text-white rounded-3xl bg-[#fc8019] px-4"
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col py-2">
        {cartItemsInfo?.map((item) => (
          <div key={item?.id} className="flex justify-between p-2">
            <div className="flex gap-2 items-center p-2">
              <span
                className={`font-bold text-xs p-1 border-2 ${
                  item?.itemAttribute?.vegClassifier === "VEG"
                    ? "border-[#7cb342]"
                    : "border-[#f44336]"
                }`}
              >
                {item?.itemAttribute?.vegClassifier === "VEG" ? "🟢" : "🔴"}
              </span>
              <span className="text-slate-700 text-lg">
                {item?.name} x {item?.count}
              </span>
            </div>
            <p className="p-2 text-slate-700 text-lg">
              ₹ {item?.itemPrice * item?.count}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col p-4 my-2">
        <p className="font-bold text-lg text-slate-700">Bill Details</p>
        <div className="flex justify-between py-2">
          <p>Item Total</p>
          <p>₹ {total}</p>
        </div>
        <div className="flex justify-between py-2">
          <p>GST</p>
          <p>₹ {Math.round(total * 0.1)}</p>
        </div>
        <div className="flex justify-between py-2">
          <p>Delivery Charges</p>
          <p>₹ 15</p>
        </div>
      </div>
      <div className="w-full h-[1.5] mt-2 bg-black"></div>
      <div className="flex justify-between p-4">
        <p className="font-bold text-lg">TO PAY</p>
        <p className="font-bold text-lg">
          ₹ {Math.round(15 + total * 0.1 + total)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
