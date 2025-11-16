import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { expect } from "vitest";

describe("test cases for product component", () => {
	const book = {
		id: 1,
		title: "Clean Code",
		author: "Robert Martin",
		releaseYear: 2008,
		price: 50,
		imgSrc: "../src/assets/Kata_DevelopmentBooks_CleanCode.png",
	};
	it("should render product image", () => {
		render(<Product book={book} />);
		const image = screen.getByRole("img");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", book.imgSrc);
	});
});
