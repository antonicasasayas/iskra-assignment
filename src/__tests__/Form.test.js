import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "../components/Form";

it("submits", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Form handleSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});
