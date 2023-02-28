import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with text 'Raúuuul'", () => {
    test("Then it should show a button with the text 'Raúuuul'", () => {
      const expectedButtonText = "Raúuuul";

      render(<Button isDisabled={false} text={expectedButtonText} />);
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
