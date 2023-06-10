import { BurgerCloseIcon, BurgerOpenIcon } from "assets";
import { StyledBurgerMenu } from "./styles";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isActive: boolean;
}

export const BurgerMenu = ({ toggleMenu, isActive }: BurgerMenuProps) => {
  isActive ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");

  return (
    <StyledBurgerMenu onClick={toggleMenu}>
      {isActive ? <BurgerCloseIcon /> : <BurgerOpenIcon />}
    </StyledBurgerMenu>
  );
};
