import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./todos", () => () => <div data-testid='todos-module'></div>);

test("renders Default App component", () => {
	render(<App />);
	const linkElement = screen.getByTestId(/todos-module/i);
	expect(linkElement).toBeInTheDocument();
});
