import { useContext } from "react";
import { SelectWrapper } from "../../elements";
import { ThemeContext } from "styled-components";
const SelectComponent = ({ headline, options, activeValue, onChange }) => {
  const globalTheme = useContext(ThemeContext);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? globalTheme?.blackColor
        : globalTheme?.basicWhite,
      color: !state.isSelected
        ? globalTheme?.blackColor
        : globalTheme?.basicWhite,
    }),
    control: () => ({
      display: "flex",
      width: 200,
    }),
  };
  return (
    <label className="state--label">
      <div className="input--headline">{headline}</div>
      <SelectWrapper
        options={options}
        value={activeValue}
        onChange={onChange}
        styles={customStyles}
      />
    </label>
  );
};
export default SelectComponent;
