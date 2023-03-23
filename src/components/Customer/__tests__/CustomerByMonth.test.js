import { screen, render } from "@testing-library/react";
import CustomerByMonth from "../CustomerByMonth";
import mockFetch from "../../mocks/mockFetch";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders CustomerByMonth table", async () => {
  render(<CustomerByMonth />);
  expect(screen.getByText("Monthly Points")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Customers By Month/);
  expect(screen.getByText("...Loading")).toBeInTheDocument();
  expect(
    screen.queryByPlaceholderText(/eg: December or december/i)
  ).toHaveAttribute("placeholder", "eg: December or december");
});
