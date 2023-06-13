import { Footer } from "components";
import { Header } from "components";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { getTheme } from "store";
import { MainContainer, Wrapper } from "./styles";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services";
import { setUser } from "store";

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);
  const dispatch = useAppDispatch();
  useEffect(() => onAuthStateChanged(auth, (user) => dispatch(setUser(user))), [dispatch]);
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
