import styled from "styled-components";
import "@fontsource/saira-stencil-one";

const ButtonStyled = styled.button`
  background-color: #cccf18;
  color: #1e1e1e;
  border: none;
  border-radius: 10px;
  width: 323.02px;
  height: 40px;
  cursor: pointer;
  font-family: "Saira Stencil One";
  font-size: 20px;

  :disabled {
    opacity: 57%;
  }

  @media (min-width: 786px) {
    height: 57px;
  }
`;

export default ButtonStyled;
