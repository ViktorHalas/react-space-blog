import { Portal } from "components";
import { AuthText, Button, ModalContainer, ModalInformation } from "./styles";

interface ModalProps {
  message: string;
  handleClick: () => void;
}

export const Modal = ({ message, handleClick }: ModalProps) => {
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
};
