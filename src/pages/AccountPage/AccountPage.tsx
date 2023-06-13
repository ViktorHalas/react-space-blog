import React from "react";
import { LogOutButton } from "./styles";
import { fetchLogOut, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(fetchLogOut());
    navigate(ROUTE.HOME);
  };
  return (
    <div>
      <LogOutButton onClick={handleLogOut}>LogOut</LogOutButton>
    </div>
  );
};
