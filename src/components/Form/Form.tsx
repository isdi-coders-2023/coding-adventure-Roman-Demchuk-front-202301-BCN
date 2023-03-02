import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isDisabled = email === "" || password === "";

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
          value={email}
          onChange={handleChangeEmail}
          className="form__input"
        />
      </label>
      <label className="form__label">
        Password
        <input
          type="password"
          name="password"
          placeholder="Introduce your password"
          value={password}
          onChange={handleChangePassword}
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
