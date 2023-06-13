import { UserIcon } from "assets";
import React from "react";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";
import { RouterLink, StyledInitials, UserInfo } from "./styles";

interface UserAccountProps {
  onClick?: () => void;
}

export const UserAccount = ({ onClick }: UserAccountProps) => {
  const { isAuth, name } = useAppSelector(getUserInfo);
  const userName = name || "";
  return (
    <>
      {isAuth ? (
        <UserInfo onClick={onClick}>
          <StyledInitials>
            {userName
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </StyledInitials>
          <RouterLink to={ROUTE.ACCOUNT}>{name}</RouterLink>
        </UserInfo>
      ) : (
        <UserInfo onClick={onClick}>
          <UserIcon />
          <RouterLink to={ROUTE.SIGN_IN}>Sign In</RouterLink>
        </UserInfo>
      )}
    </>
  );
};
