import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
// import rerenderSlice from './rerednerSlice'
import bookingReducer from "../features/bookingSlice";
import contactReducer from "../features/contactSlice";
export const rootReducer = combineReducers({
  cart: cartSlice,
  booking: bookingReducer,
  contact:contactReducer
  // language : languageReducer,
  // rerender : rerenderSlice,
});
