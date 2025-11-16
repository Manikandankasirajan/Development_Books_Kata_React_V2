import { render, screen } from "@testing-library/react";
import ProductsList from "./ProductsList";
import { expect } from "vitest";

describe("test cases for product list component", () => {
	it("should render heading", () => {
		render(<ProductsList />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/books available/i);
	});
});
