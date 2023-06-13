import React from "react";
import { ROUTE } from "router";
import { RouterLink, SignInPageContainer, Title } from "./styles";
import { SignInForm } from "components";

export const SignInPage = () => {
  return (
    <SignInPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <RouterLink to={ROUTE.HOME}>Back to home</RouterLink>
      <Title>Sign In</Title>
      <SignInForm></SignInForm>
    </SignInPageContainer>
  );
};
