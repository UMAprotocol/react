import React from "react";
import { Button } from "../src/components";

import { render, screen } from "@testing-library/react";

const placeholderText = "Hi from my test";
test("Button should render correctly.", () => {
  render(<Button>{placeholderText}</Button>);
  const button = screen.getByRole(/button/);
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(placeholderText);
});
