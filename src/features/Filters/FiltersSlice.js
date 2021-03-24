import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    state: "New York",
  },
  reducers: {
    setCity: (state, { payload }) => {
      state.city = payload;
    },
  },
});

export const { setCity } = filtersSlice.actions;

export default filtersSlice.reducer;
