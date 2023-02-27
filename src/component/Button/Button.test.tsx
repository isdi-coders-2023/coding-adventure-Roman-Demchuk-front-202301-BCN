import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered", () => {
    test("Then it should show a button with the text 'Raúuuul'", () => {
      const expectedButtonTex = "Raúuuul";

      render(<Button text={expectedButtonTex} />);
      const result = screen.getByRole("button", { name: expectedButtonTex });

      expect(result).toBeInTheDocument();
    });
  });
});
