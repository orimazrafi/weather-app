import { useEffect } from "react";
import { convertUnixDate } from "./utils";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  city,
  cityReduxOptions,
  setSelectedWeather,
  setLoader,
} from "./features/Filters/FiltersSlice";
const token = "8ddceeacaf8b95fe943c88fc8389dee0";
export const useFetch = () => {
  const dispatch = useDispatch();
  const activeCity = useSelector(city);
  const cityOptions = useSelector(cityReduxOptions);
  useEffect(() => {
    const getWeather = async () => {
      try {
        const cityIndex = cityOptions.findIndex(
          (cityObject) => cityObject?.value === activeCity
        );
        if (cityIndex !== -1 && activeCity) {
          dispatch(setLoader(true));
          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityOptions[cityIndex]?.cords?.lat}&lon=${cityOptions[cityIndex]?.cords?.lon}&exclude=minutely,daily&units=metric&appid=${token}`;
          const {
            data: { current, hourly },
          } = await axios.get(`${url}`);
          let firstDay = convertUnixDate(current?.dt)?.getDay();
          const filteredArray = hourly.filter((hour) => {
            let day = convertUnixDate(hour?.dt)?.getDay();
            return firstDay === day;
          });
          dispatch(setSelectedWeather(filteredArray));
          dispatch(setLoader(false));
        }
      } catch (ex) {
        dispatch(setLoader(false));
        console.log("message", ex.message);
      }
    };
    getWeather();
  }, [activeCity, cityOptions, dispatch]);
};
