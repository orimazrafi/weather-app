import { useState, useEffect } from "react";
import SelectComponent from "../SelectComponent/SelectComponent";
import { setCity, setState } from "../../features/Filters/FiltersSlice";
import { useDispatch } from "react-redux";
const stateOptions = [
  { value: "uk", label: "UK" },
  { value: "spain", label: "Spain" },
];

const UserSelection = () => {
  const dispatch = useDispatch();
  const cityOptions = [
    {
      value: "barcelona",
      label: "Barcelona",
      cords: { lat: 41.3888, lon: 2.159 },
    },
    { value: "madrid", label: "Madrid", cords: { lat: 40.4165, lon: -3.7026 } },
  ];
  const [activeState, setActiveState] = useState("");
  const [activeCity, setActiveCity] = useState("");

  const handleCity = ({ value, label }) => {
    setActiveCity({ value, label });
    dispatch(setCity(value));
  };

  useEffect(() => {
    /**reset city when changing state*/
    setActiveCity("");
    dispatch(setCity(""));
  }, [activeState, dispatch]);

  const handleState = ({ value, label }) => {
    /**reset Weather arraya and update state*/
    dispatch(setState(value));
    setActiveState({ value, label });
  };

  return (
    <div style={{ display: "flex" }}>
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
    </div>
  );
};
export default UserSelection;
