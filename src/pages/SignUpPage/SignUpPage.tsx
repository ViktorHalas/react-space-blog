import { SignUpForm } from "components";
import React from "react";
import { ROUTE } from "router";
import { RouterLink, SignUpPageContainer, Title } from "./styles";

export const SignUpPage = () => {
  return (
    <SignUpPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <RouterLink to={ROUTE.HOME}>Back to home</RouterLink>
      <Title>Sign Up</Title>
      <SignUpForm></SignUpForm>
    </SignUpPageContainer>
  );
};
