import { SignUpForm } from "components/SignUpForm/SignUpForm";
import React from "react";
import { ROUTE } from "router";
import { RouterLink } from "./styles";


export const SignUpPage = () => {
  return (
    <>
      <RouterLink to={ROUTE.HOME}>Back to home</RouterLink>
      <SignUpForm></SignUpForm>
    </>
  );
};
