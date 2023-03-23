import { render, screen } from "@testing-library/react";
import App from "./App";

test("checks if App renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/Retailer rewards program/i);
  expect(linkElement).toBeInTheDocument();
});
