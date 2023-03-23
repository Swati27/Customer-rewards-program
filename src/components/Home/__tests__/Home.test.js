import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("renders heading text", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Retailer rewards program/i);
  expect(linkElement).toBeInTheDocument();
});
