import { Portal } from "components";
import { memo } from "react";
import { AuthText, Button, ModalContainer, ModalInformation } from "./styles";

interface IProps {
  message: string;
  handleClick: () => void;
}

export const Modal = memo(({ message, handleClick }: IProps) => {
  return (
    <Portal>
      <ModalContainer>
        <ModalInformation>
          <AuthText>{message}</AuthText>
          <Button onClick={handleClick}>OK</Button>
        </ModalInformation>
      </ModalContainer>
    </Portal>
  );
});
