import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders receipt", () => {
  render(<App />);
  expect(screen.getByText(/Receipt/i)).toBeInTheDocument();
});