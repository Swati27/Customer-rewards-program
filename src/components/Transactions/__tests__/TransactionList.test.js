import { screen, render } from "@testing-library/react";
import TransactionList from "../TransactionList";
import mockFetch from "../../mocks/mockFetch";

beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
    jest.restoreAllMocks();
});

test("renders TransactionList table", async () => {
    render(<TransactionList />);
    expect(await screen.findByText('10-05-2022')).toBeInTheDocument();
    expect(screen.getByText('Transaction Id')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(/Transaction List/);
});
