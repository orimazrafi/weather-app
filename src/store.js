import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import FiltersSlice from "./features/Filters/FiltersSlice";
import { filtersMiddleware } from "./filtersMiddleware";

const middleware = [...getDefaultMiddleware(), filtersMiddleware];
export const store = configureStore({
  reducer: {
    filters: FiltersSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
