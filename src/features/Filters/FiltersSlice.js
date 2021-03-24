import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    city: "",
    state: "",
    cityOptions: [
      { value: "", label: "" },
      { value: "", label: "" },
    ],
    selectedWeather: [],
  },
  reducers: {
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    setState: (state, { payload }) => {
      state.state = payload;
    },
    setOptionsForCity: (state, { payload }) => {
      state.cityOptions = payload;
    },
    setSelectedWeather: (state, { payload }) => {
      state.selectedWeather = payload;
    },
  },
});

export const {
  setCity,
  setState,
  setOptionsForCity,
  setSelectedWeather,
} = filtersSlice.actions;
export const city = (state) => state.filters.city;
export const state = (state) => state.filters.state;
export const cityReduxOptions = (state) => state.filters.cityOptions;
export const selectedWeather = (state) => state.filters.selectedWeather;
export default filtersSlice.reducer;
