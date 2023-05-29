import { SortButtonByDate } from "components";
import React from "react";
import { DaysInfo } from "types";
interface SortButtonsProps {
  days: DaysInfo[];
  handleAllBlogs: () => void;
  handleDayValue: () => void;
  handleWeekValue: () => void;
  handleMonthValue: () => void;
  handleYearValue: () => void;
  selectedButton: string;
}
export const SortButtons = ({
  days,
  handleAllBlogs,
  handleDayValue,
  handleWeekValue,
  handleMonthValue,
  handleYearValue,
  selectedButton,
}: SortButtonsProps) => {
  return (
    <>
      <SortButtonByDate selectedButton={selectedButton} days={days[0]} onClick={handleAllBlogs} />
      <SortButtonByDate selectedButton={selectedButton} days={days[1]} onClick={handleDayValue} />
      <SortButtonByDate selectedButton={selectedButton} days={days[2]} onClick={handleWeekValue} />
      <SortButtonByDate selectedButton={selectedButton} days={days[3]} onClick={handleMonthValue} />
      <SortButtonByDate selectedButton={selectedButton} days={days[4]} onClick={handleYearValue} />
    </>
  );
};
