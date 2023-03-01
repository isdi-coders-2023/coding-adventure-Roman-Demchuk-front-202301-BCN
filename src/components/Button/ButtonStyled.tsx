import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const ButtonStyled = styled.button`
  background-color: var(--accentColor);
  color: var(--primaryColor);
  border: none;
  border-radius: 10px;
  height: 40px;
  font-family: var(--displayFont);
  font-size: 1.25rem;
  align-self: center;
  width: 320px;

  :disabled {
    opacity: 57%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }

  @media (min-width: 987px) {
    width: 320px;
    height: 60px;
  }
`;

export default ButtonStyled;
