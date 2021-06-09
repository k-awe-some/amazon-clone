import { createSlice } from "@reduxjs/toolkit";

import { Item } from "../../shared/interfaces";

const initialState = {
  items: [] as Item[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const itemIndex = action.payload;

      let newCart = [...state.items];
      itemIndex >= 0
        ? newCart.splice(itemIndex, 1)
        : console.warn("Item does not exist in cart.");

      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state): Item[] => state.cart.items;
export const selectTotal = (state): number =>
  state.cart.items.reduce((total: number, item: Item) => total + item.price, 0);

export default cartSlice.reducer;
