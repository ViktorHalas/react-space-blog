import React from "react";
import { Logo, StyledHeader } from "./styles";
import { BurgerMenu, NavMenu } from "components";
import { logo } from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { useToggle } from "hooks";
import { useWindowSize } from "hooks";
import { getUserInfo, useAppSelector } from "store";

export const Header = () => {
  const [isActive, setIsActive] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width <= 568;
  const { isAuth } = useAppSelector(getUserInfo);
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <Logo src={logo} />
      </Link>
      <NavMenu
        isOpen={isActive}
        isMobile={isMobile}
        handleClose={setIsActive}
        isAuth={isAuth}
      ></NavMenu>
      {isMobile && <BurgerMenu toggleMenu={setIsActive} isActive={isActive} />}
    </StyledHeader>
  );
};
