import React from "react";
import Select, { SingleValue } from "react-select";
import { SelectOption } from "types";
import { selectStyles } from "./styles";

interface CustomSelectProps {
  options: SelectOption[];
  onChange: (option: SingleValue<SelectOption>) => void;
}

export const CustomSelect = ({ onChange, options }: CustomSelectProps) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      styles={selectStyles}
      defaultValue={options[0]}
      isMulti={false}
      isSearchable={false}
    />
  );
};
