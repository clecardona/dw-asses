import { render, screen } from "@testing-library/react";
import App from "./App";
import { displayNElements } from "scripts/methods";

//UI TESTS
test("renders DANIEL WELLINGTON", () => {
  render(<App />);
  const element = screen.getByText(/daniel wellington/i);
  expect(element).toBeInTheDocument();
});

//LOGIC TEST
test("array N Elements", () => {
  const array = [0, 0, 0, 0, 0, 3, 4, 3];
  const quantity = 2;
  const arrayNElements = displayNElements(array, quantity);
  expect(arrayNElements.length).toBe(2);
});
