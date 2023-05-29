import React, { ChangeEvent } from "react";
import "./style.css";
import Toggle from "react-toggle";

interface ToggleButtonProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleButton = ({ onChange }: ToggleButtonProps) => {
  return (
    <>
      <Toggle icons={false} onChange={onChange} />
    </>
  );
};
