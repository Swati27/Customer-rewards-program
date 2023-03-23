import "@testing-library/jest-dom/extend-expect";

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import InputFilter from "../InputFilter";

afterEach(cleanup);

it("InputFilter", () => {
  render(
    <InputFilter
      labelText="Monthly points :"
      placeHolderText="december"
    />
  );
  expect(
    screen.getByText("For monthly points, type in full month")
  ).toBeInTheDocument();
  expect(screen.getByPlaceholderText("december")).toBeInTheDocument();
});

it("Input Change", async () => {
  const handleInputSubmit = jest.fn();
  render(
    <InputFilter
      labelText="foo"
      placeHolderText="month"
      handleInputSubmit={handleInputSubmit}
    />
  );
  const inputElement = screen.getByTestId("input-element");
  fireEvent.change(inputElement, { target: { value: "december" } });
  expect(inputElement.value).toBe("december");
});

it("handleInputSubmit -click enter", async () => {
  const handleInputSubmit = jest.fn();
  render(
    <InputFilter
      labelText="foo"
      placeHolderText="month"
      handleInputSubmit={handleInputSubmit}
    />
  );
  const inputElement = screen.getByTestId("input-element");
  const inputForm = screen.getByTestId("input-form");
  fireEvent.change(inputElement, { target: { value: "december" } });
  fireEvent.submit(inputForm);
  await waitFor(() => handleInputSubmit);
  expect(handleInputSubmit).toHaveBeenCalled();
});
