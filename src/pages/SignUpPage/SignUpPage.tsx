import { SignUpForm } from "components";
import React from "react";
import { ROUTE } from "router";
import { RouterLink, SignUpPageContainer, Title } from "./styles";

export const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <RouterLink to={ROUTE.HOME}>Back to home</RouterLink>
      <Title>Sign Up</Title>
      <SignUpForm></SignUpForm>
    </SignUpPageContainer>
  );
};
