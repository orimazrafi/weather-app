import { useFetch } from "../../hooks";
import UserSelection from "../UserSelection/UserSelection";
import { AppHeadline } from "../../elements";
import WeatherCarousel from "../WeatherCarousel/WeatherCarousel";
const HomePage = () => {
  useFetch();
  return (
    <div className="main--container">
      <AppHeadline>WEATHER APP</AppHeadline>
      <UserSelection />
      <WeatherCarousel />
    </div>
  );
};
export default HomePage;
