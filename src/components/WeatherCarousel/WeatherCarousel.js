import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import {
  city,
  state,
  selectedWeather,
  loader,
} from "../../features/Filters/FiltersSlice";
import { convertUnixDate } from "../../utils";
import { sliderBreakPoints } from "../../helpers";
import {
  StateText,
  CardWrapper,
  CityName,
  CityTemp,
  CityInfo,
} from "../../elements";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const WeatherCarousel = () => {
  const activeState = useSelector(state);
  const weatherForToday = useSelector(selectedWeather);
  const activeCity = useSelector(city);
  const loading = useSelector(loader);
  if (loading) return <LoadingComponent />;
  if (weatherForToday?.length === 0 || !activeCity) return null;
  return (
    <>
      {/* {loading ? (
        <LoadingComponent />
      ) : ( */}
      <>
        <StateText>{activeState}</StateText>
        <Carousel itemsToShow={3} breakPoints={sliderBreakPoints}>
          {weatherForToday.map(({ weather, dt, temp }, index) => (
            <CardWrapper className="city" key={dt} id={index}>
              <h1>{`${convertUnixDate(dt)?.getHours()}:00`}</h1>
              <CityName>
                <span>{weather[0]?.main}</span>
                <sup>{activeCity}</sup>
              </CityName>
              <CityTemp>
                {Math.round(temp)}
                <sup>&deg;C</sup>
              </CityTemp>
              <CityInfo>
                <img
                  src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                  alt={weather[0]?.description}
                />
                <p>{weather[0]?.description}</p>
              </CityInfo>
            </CardWrapper>
          ))}
        </Carousel>
      </>
    </>
  );
};
export default ErrorBoundryComponent(WeatherCarousel);
