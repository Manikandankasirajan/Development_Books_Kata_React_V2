import { render, screen } from "@testing-library/react";
import ProductsList from "./ProductsList";
import { expect } from "vitest";

describe("test cases for product list component", () => {
	it("should render heading", () => {
		const cart = [];
		render(<ProductsList cart={cart} />);
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/books available/i);
	});
});
