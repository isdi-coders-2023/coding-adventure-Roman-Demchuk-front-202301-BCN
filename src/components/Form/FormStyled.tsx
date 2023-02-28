import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .form {
    &__title {
      font-family: var(--displayFont);
      font-size: 1.25rem;
      color: var(--accentColor);
    }

    &__label {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    &__input:not(&__input--file) {
      padding: 11px;
      border-radius: 8px;
    }
  }

  @media (min-width: 987px) {
    .form {
      &__title {
        font-size: 2.5rem;
      }

      &__input:not(&__input--file) {
        padding: 20px 11px;
      }
    }
  }
`;

export default FormStyled;
