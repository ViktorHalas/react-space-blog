import { StylesConfig } from "react-select";
import { SelectOption } from "types";

export const selectStyles: StylesConfig<SelectOption> = {
  container: (base) => ({
    ...base,
    maxWidth:"300px",
    width:"100%",
    height:"100%",
    outline: "none",
  }),
  control: (base, state) => ({
    ...base,
    height: "100%",
    fontSize: "16px",
    fontWeight: "400",
    border: "1px solid #EEEEEE",
    outline: "none",
    cursor: "pointer",
    boxShadow: "none",
    "&:hover": {
      borderColor: state.isFocused ? "#23C9FF;" : "#EEEEEE",
    },
  }),

  option: (base, state) => ({
    ...base,
    fontSize: "12px",
    cursor: "pointer",
    borderColor: "#2ED2C9",
    color: state.isSelected ? "#000000" : "#000000",
    backgroundColor: state.isSelected ? "#23C9FF" : "white",
    textAlign: "center",
    "&:hover": {
      backgroundColor: state.isFocused ? "rgba(35, 201, 255, 0.3)" : "rgba(46, 210, 201, 0.3)",
    },
  }),

  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: "#EEEEEE",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#EEEEEE",
    padding: "3px",
  }),
};