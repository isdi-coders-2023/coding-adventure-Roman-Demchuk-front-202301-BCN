import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  let isDisabled = false;

  return (
    <FormStyled className="form">
      <h2 className="form__title">Register for the event</h2>
      <label className="form__label">
        Email
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Introduce your email"
          className="form__input"
        />
      </label>
      <label className="form__label">
        Password
        <input
          type="password"
          name="password"
          placeholder="Introduce your password"
          className="form__input"
        />
      </label>
      <label className="form__label">
        Image
        <input
          type="file"
          name="image"
          accept="image/*"
          className="form__input form__input--file"
        />
      </label>
      <Button isDisabled={isDisabled} text="Sign up" />
    </FormStyled>
  );
};

export default Form;
