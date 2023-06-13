import { ResetPasswordForm } from "components/ResetPasswordForm/ResetPasswordForm";
import React from "react";
import { ResetPageContainer, RouterLink, Title } from "./styles";
import { useNavigate } from "react-router";

export const PasswordResetPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <ResetPageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <RouterLink onClick={handleBack}>Back</RouterLink>
      <Title>Reset Password</Title>
      <ResetPasswordForm />
    </ResetPageContainer>
  );
};
