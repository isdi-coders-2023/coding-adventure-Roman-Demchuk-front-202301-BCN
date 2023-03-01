import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a From component", () => {
  describe("When rendered", () => {
    test("Then it should show a 'Sign up' button", () => {
      const expectedButtonText = "Sign up";
      render(<Form />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a label with text 'Email'", () => {
      const expectedLabelText = /email/i;
      render(<Form />);

      const label = screen.getByLabelText(expectedLabelText);

      expect(label).toBeInTheDocument();
    });

    test("Then it should show a label with text 'Password'", () => {
      const expectedLabelText = /password/i;
      render(<Form />);

      const label = screen.getByLabelText(expectedLabelText);

      expect(label).toBeInTheDocument();
    });

    test("Then it should show a label with text 'Image'", () => {
      const expectedLabelText = /image/i;
      render(<Form />);

      const label = screen.getByLabelText(expectedLabelText);

      expect(label).toBeInTheDocument();
    });
  });
});
