import { useState, useEffect } from "react";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  setCity,
  cityReduxOptions,
  setState,
  setSelectedWeather,
} from "../../features/Filters/FiltersSlice";
import { DropdownWrapper } from "../../elements";
import { useDispatch, useSelector } from "react-redux";
const stateOptions = [
  { value: "uk", label: "UK" },
  { value: "spain", label: "Spain" },
];

const UserSelection = () => {
  const dispatch = useDispatch();
  const cityOptions = useSelector(cityReduxOptions);
  const [activeState, setActiveState] = useState("");
  const [activeCity, setActiveCity] = useState("");

  const isItTheSameSelection = (currnent, selectedValue) =>
    currnent === selectedValue;

  const handleCity = ({ value, label }) => {
    if (isItTheSameSelection(activeCity?.value, value)) return;
    setActiveCity({ value, label });
    dispatch(setCity(value));
  };

  useEffect(() => {
    /**reset city when changing state*/
    setActiveCity("");
    dispatch(setCity(""));
  }, [activeState, dispatch]);

  const handleState = ({ value, label }) => {
    if (isItTheSameSelection(activeState?.value, value)) return;
    /**reset Weather arraya and update state*/
    dispatch(setSelectedWeather([]));
    dispatch(setState(value));
    setActiveState({ value, label });
  };

  return (
    <DropdownWrapper>
      {[
        {
          headline: "Country",
          options: stateOptions,
          activeValue: activeState,
          onChange: handleState,
        },
        {
          headline: "City",
          options: cityOptions,
          activeValue: activeCity,
          onChange: handleCity,
        },
      ].map((dropdown) => (
        <SelectComponent
          key={dropdown.headline}
          headline={dropdown.headline}
          options={dropdown.options}
          activeValue={dropdown.activeValue}
          onChange={dropdown.onChange}
        />
      ))}
    </DropdownWrapper>
  );
};
export default UserSelection;
