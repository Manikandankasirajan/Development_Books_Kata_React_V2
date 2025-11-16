import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("test cases for navbar component", () => {
	const quantity = 0;
	it("should render application logo ", () => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);

		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/development/i);
	});
	it("should render nav links ", () => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);
		const navLink = screen.getByRole("listitem");
		expect(navLink).toBeInTheDocument();
		expect(navLink).toHaveTextContent(/cart/i);
	});
});
