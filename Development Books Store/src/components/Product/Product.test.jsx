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
	it("should render full book title when charector is with in the limit ", () => {
		render(<Product book={book} />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(book.title);
	});

	const book2 = {
		id: 5,
		title: "Working Effectively With Legacy Code",
		author: "Michael C. Feathers",
		releaseYear: 2004,
		price: 50,
		imgSrc: "../src/assets/Kata_DevelopmentBooks_Refactoring.jpeg",
	};

	it("should render truncated book title when charector excedes the limit", () => {
		const truncatedTitle = book2.title.slice(0, 15) + "...";
		render(<Product book={book2} />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveTextContent(truncatedTitle);
	});

	it("should render price of the book", () => {
		render(<Product book={book} />);
		const bookPrice = screen.getByRole("heading", { level: 4 });
		expect(bookPrice).toBeInTheDocument();
	});
});
