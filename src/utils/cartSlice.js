import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartResId: null,
  cartResInfo: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action?.payload?.itemCard);
      state.cartResId = action?.payload?.resId;
      state.cartResInfo = action?.payload?.restaurantInfo;
    },
    removeItem: (state, action) => {
      const index = state?.cartItems?.findIndex(
        (item) => item[action?.payload?.key] === action?.payload?.value
      );
      if (index === -1) return state; // No matching item found

      const updatedCartItems = [
        ...state?.cartItems?.slice(0, index),
        ...state?.cartItems?.slice(index + 1),
      ];

      return {
        ...state,
        cartItems: updatedCartItems,
        cartResId: updatedCartItems?.length === 0 ? null : state?.cartResId,
        cartResInfo: updatedCartItems?.length === 0 ? {} : state?.cartResInfo,
      };
    },
    clearCart: (state, action) => {
      //RTK - either mutate the existing state or return a new state
      //state.items.length = 0 // original State = []

      return initialState; // This new object will be replaced inside originalState = {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
