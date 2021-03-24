import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import FiltersSlice from "./features/Filters/FiltersSlice";

const middleware = [...getDefaultMiddleware()];
export const store = configureStore({
  reducer: {
    filters: FiltersSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
