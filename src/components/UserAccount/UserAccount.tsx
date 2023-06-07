import { UserIcon } from "assets";
import React from "react";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";
import { RouterLink, StyledInitials, UserInfo } from "./styles";

export const UserAccount = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);
  return (
    <>
      {isAuth ? (
        <UserInfo>
          <StyledInitials>
            {name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </StyledInitials>
          <RouterLink to={ROUTE.ACCOUNT}>{name}</RouterLink>
        </UserInfo>
      ) : (
        <UserInfo>
          <UserIcon />
          <RouterLink to={ROUTE.SIGN_IN}>Sign In</RouterLink>
        </UserInfo>
      )}
    </>
  );
};
