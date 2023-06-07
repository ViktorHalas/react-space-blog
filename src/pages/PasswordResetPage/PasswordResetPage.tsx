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
    <ResetPageContainer>
      <RouterLink onClick={handleBack}>Back</RouterLink>
      <Title>Reset Password</Title>
      <ResetPasswordForm />
    </ResetPageContainer>
  );
};
