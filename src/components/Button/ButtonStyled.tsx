import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const ButtonStyled = styled.button`
  background-color: var(--accentColor);
  color: var(--primaryColor);
  border: none;
  border-radius: 10px;
  width: 323.02px;
  height: 40px;
  font-family: var(--displayFont);
  font-size: 1.25rem;
  align-self: center;

  :disabled {
    opacity: 57%;
  }

  @media (min-width: 987px) {
    height: 57px;
  }
`;

export default ButtonStyled;
