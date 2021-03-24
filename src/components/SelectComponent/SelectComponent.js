import Select from "react-select";

const SelectComponent = ({ headline, options, activeValue, onChange }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "black" : "rgba(250, 250, 250, 0.85)",
      color: !state.isSelected ? "black" : "rgba(250, 250, 250, 0.85)",
    }),
    control: () => ({
      display: "flex",
      width: 200,
    }),
  };
  return (
    <label className="state--label">
      <div className="input--headline">{headline}</div>
      <Select
        options={options}
        value={activeValue}
        onChange={onChange}
        styles={customStyles}
      />
    </label>
  );
};
export default SelectComponent;
