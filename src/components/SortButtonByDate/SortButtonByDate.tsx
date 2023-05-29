import React from "react";
import { DaysInfo } from "types";
import { StyledButton } from "./styles";

interface SortButtonByDateProps {
  days: DaysInfo;
  onClick: () => void;
  selectedButton: string;
}

export const SortButtonByDate = ({ days, onClick, selectedButton }: SortButtonByDateProps) => {
  return (
    <>
      <StyledButton isActive={selectedButton === days.id} key={days.id} onClick={onClick}>
        {days.label}</StyledButton>
    </>
  );
};
