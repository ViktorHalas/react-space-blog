import React from "react";
import { ROUTE } from "router";
import { RouterLink, SignInPageContainer, Title } from "./styles";
import { SignInForm } from "components";

export const SignInPage = () => {
  return (
    <SignInPageContainer>
      <RouterLink to={ROUTE.HOME}>Back to home</RouterLink>
      <Title>Sign In</Title>
      <SignInForm></SignInForm>
    </SignInPageContainer>
  );
};
