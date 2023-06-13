import styled from "styled-components";
import { Color, Typography } from "ui";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: grid;
  place-items: center;
  padding: 2rem;
`;

const ModalInformation = styled.div`
  display: grid;
  place-items: center center;
  min-width: 600px;
  max-height: 400px;
  padding: 2rem;
  border-radius: 12px;
  background-color: ${Color.WHITE};
`;

const AuthText = styled.p`
  ${Typography.B1};
  padding-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${Color.SECONDARY_BG};
`;

export { ModalContainer, ModalInformation, AuthText, Button };