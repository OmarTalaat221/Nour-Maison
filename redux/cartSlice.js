"use client"

import { createSlice } from "@reduxjs/toolkit";

// Helper function to safely access localStorage
const getLocalStorageCart = () => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem("nour_cart")) || [];
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      return [];
    }
  }
  return [];
};

const initialState = {
  cart: getLocalStorageCart(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartData = [...state.cart]; // Work with the Redux state instead of fetching from localStorage
      const prodData = { ...action.payload };

      const prodExist = cartData.find((item) => item.id == prodData.id);
      if (prodExist) {
        const newData = cartData.map((item) => {
          if (item.id == prodData.id) {
            return {
              ...item,
              count: item?.count + 1,
            };
          }
          return item;
        });

        localStorage.setItem("nour_cart", JSON.stringify(newData));
        state.cart = newData;
        return;
      }

      const dataset = {
        ...prodData,
        count: 1,
      };

      cartData.push(dataset);
      localStorage.setItem("nour_cart", JSON.stringify(cartData));
      state.cart = cartData;
    },

    addOneToCart: (state, action) => {
      const cartData = [...state.cart]; // Work with the Redux state instead of fetching from localStorage
      const prodData = action.payload;

      const newData = cartData.map((item) => {
        if (item.id == prodData.id) {
          return {
            ...item,
            count: Number(item.count) + 1, // Ensure count is a number
          };
        }
        return item;
      });

      localStorage.setItem("nour_cart", JSON.stringify(newData));
      state.cart = newData;
    },

    addToCartWithCount: (state, action) => {
      const cartData = [...state.cart]; // Work with the Redux state instead of fetching from localStorage
      const prodData = { ...action.payload };

      const dataset = {
        ...prodData,
        count: prodData.count || 1,
      };

      cartData.push(dataset);
      localStorage.setItem("nour_cart", JSON.stringify(cartData));
      state.cart = cartData;
    },

    minusFromCart: (state, action) => {
      const cartData = [...state.cart]; // Work with the Redux state instead of fetching from localStorage
      const prodData = action.payload;

      const newData = cartData.map((item) => {
        if (item.id == prodData.id) {
          return {
            ...item,
            count: Number(item.count) - 1, // Ensure count is a number
          };
        }
        return item;
      });

      localStorage.setItem("nour_cart", JSON.stringify(newData));
      state.cart = newData;
    },

    removeFromCart: (state, action) => {
      const cartData = [...state.cart]; // Work with the Redux state instead of fetching from localStorage
      const prodData = action.payload;

      const newData = cartData.filter((c_prod) => c_prod.id !== prodData.id);

      localStorage.setItem("nour_cart", JSON.stringify(newData));
      state.cart = newData;
    },

    clearCart: (state) => {
      localStorage.removeItem("nour_cart");
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  minusFromCart,
  removeFromCart,
  addOneToCart,
  clearCart,
  addToCartWithCount,
} = cartSlice.actions;

export default cartSlice.reducer;
