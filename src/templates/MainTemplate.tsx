import { Footer } from "components";
import { Header } from "components/Header/Header";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks/hooks";
import { getTheme } from "store/selectors/themeSelector";
import { MainContainer, Wrapper } from "./styles";

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};
