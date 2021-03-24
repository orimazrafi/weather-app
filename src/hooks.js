import { useEffect } from "react";
import axios from "axios";

const token = "8ddceeacaf8b95fe943c88fc8389dee0";
export const useFetch = () => {
  useEffect(() => {
    const getWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.4165&lon=-3.7026&exclude=minutely,daily&units=metric&appid=${token}`;
        const response = await axios.get(`${url}`);
        console.log({ response });
      } catch (ex) {
        console.log("message", ex.message);
      }
    };
    getWeather();
  }, []);
};
