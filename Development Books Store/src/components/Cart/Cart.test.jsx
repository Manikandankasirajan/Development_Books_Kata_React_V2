import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { expect } from "vitest";

describe("test cases for cart component", () => {
    it("should render heading", () => {
        const cart = [];
		render(<Cart cart={cart} />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveTextContent(/cart/i);
	});
	it("should render cart empty when cart has no books", () => {
		const cart = [];
		render(<Cart cart={cart} />);
		expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
			/the cart is empty/i
		);
	});
});
