import React from "react";
import { TabsBlogInfo } from "types/types";
import { Tab } from "./styles";

interface TabsBlogProps {
  tabs: TabsBlogInfo;
  selectedTabId: string;
  onClick: () => void;
}

export const TabBlog = ({ tabs, selectedTabId, onClick }: TabsBlogProps) => {
  return (
    <>
      <Tab isActive={selectedTabId === tabs.id} key={tabs.id} onClick={onClick}>
        {tabs.label}
      </Tab>
    </>
  );
};
