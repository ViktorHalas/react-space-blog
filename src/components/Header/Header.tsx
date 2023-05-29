import React from "react";
import { Container, Logo, StyledHeader } from "./styles";
import { SearchForm } from "components";
import { logo } from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { useToggle } from "hooks";
import { useWindowSize } from "hooks";

export const Header = () => {
  const [isActive, setIsActive] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width <= 568;
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <Logo src={logo} />
      </Link>
      <Container>
        <SearchForm onClick={setIsActive} />
      </Container>
    </StyledHeader>
  );
};
