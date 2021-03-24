import { setCity, setOptionsForCity } from "./features/Filters/FiltersSlice";
const spainOptions = [
  {
    value: "barcelona",
    label: "Barcelona",
    cords: { lat: 41.3888, lon: 2.159 },
  },
  { value: "madrid", label: "Madrid", cords: { lat: 40.4165, lon: -3.7026 } },
];
const ukOptions = [
  {
    value: "liverpool",
    label: "Liverpool",
    cords: { lat: 53.4106, lon: -2.9779 },
  },
  {
    value: "london",
    label: "London",
    cords: { lat: 33.441792, lon: -94.037689 },
  },
];
export const filtersMiddleware = (store) => (next) => (action) => {
  if (action.type === "filters/setSelectedWeather") {
    if (!action.payload) store.dispatch(setCity(""));
  }
  if (action.type === "filters/setState") {
    const options = action.payload === "spain" ? spainOptions : ukOptions;
    if (action.payload) store.dispatch(setOptionsForCity(options));
  }
  next(action);
};
