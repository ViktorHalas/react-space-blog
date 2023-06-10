import { SearchForm, ToggleTheme, UserAccount } from "components";
import React from "react";
import { SearchContainer, StyledNav, Title, TitleContainer } from "./styles";
import { BurgerCloseIcon } from "assets";

interface NavMenuProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0, transition: { ease: "easeInOut" } },
  closed: { opacity: 0, x: 2000, transition: { ease: "easeInOut" } },
  idle: {},
};

export const NavMenu = ({ isMobile, isOpen, handleClose }: NavMenuProps) => {
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";

  return (
    <StyledNav animate={currentVariant} variants={menuVariants} initial="idle">
      {isMobile && (
        <TitleContainer>
          <Title>Menu</Title>
          <BurgerCloseIcon onClick={handleClose} />
        </TitleContainer>
      )}
      {isMobile ? (
        <SearchContainer>
          <SearchForm onClick={handleClose} />
        </SearchContainer>
      ) : (
        <SearchForm />
      )}
      {isMobile ? <UserAccount onClick={handleClose} /> : <UserAccount />}
      {isMobile && <ToggleTheme />}
    </StyledNav>
  );
};
