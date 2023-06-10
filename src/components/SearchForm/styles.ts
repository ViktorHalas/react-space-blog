import styled from "styled-components";
import { Color } from "ui";

const StyledForm = styled.form`
  height: 100%;
  width: 100%;
`;

const InputWrapper = styled.div`
  height: 100%;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  font-size: 16px;
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.SECONDARY_BG};
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  visibility: hidden;
`;
export { StyledForm, StyledInput, InputWrapper, SubmitButton };