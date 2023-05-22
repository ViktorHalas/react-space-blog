import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks/hooks";
import { getTheme } from "store/selectors/themeSelector";

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  return (
    <div>
      <Outlet />
    </div>
  );
};
