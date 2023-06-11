import styled from "styled-components";

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
  background-color: transparent;
`;

const ModalInformation = styled.div`
  display: grid;
  place-items: center center;
  max-width: 600px;
  max-height: 400px;
  padding: 2rem;
  border-radius: 12px;
`;

const AuthText = styled.p`
  padding-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`

`;

export { ModalContainer, ModalInformation, AuthText, Button };