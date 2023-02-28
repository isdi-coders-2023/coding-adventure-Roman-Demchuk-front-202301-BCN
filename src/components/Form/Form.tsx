const Form = (): JSX.Element => {
  return (
    <form>
      <h2>Register for the event</h2>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Introduce your email"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Introduce your password"
        />
      </label>
      <label htmlFor="image">
        Image
        <input type="file" name="image" id="image" accept="image/*" />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Form;
