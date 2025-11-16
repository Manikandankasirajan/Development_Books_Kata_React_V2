import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { expect } from "vitest";

describe("test cases for navbar component", () => {
	it("should render application logo ", () => {
		render(<NavBar />);
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/development/i);
	});
	it("should render nav links ", () => {
		render(<NavBar />);
		const navLink = screen.getByRole("listitem");
		expect(navLink).toBeInTheDocument();
		expect(navLink).toHaveTextContent(/cart/i);
	});
});
