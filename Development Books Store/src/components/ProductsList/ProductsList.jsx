import React from "react";
import { BOOK_LIST } from "../../data/constants";
import Product from "../Product/Product";

const ProductsList = () => {
	return (
		<>
			<h2>Books Available</h2>
			<div className="container">
				<ul className="productsContainer">
					{BOOK_LIST.map((book) => {
						return (
							<li key={book.id}>
								<Product book={book} />
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default ProductsList;
