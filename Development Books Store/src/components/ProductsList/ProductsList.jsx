import React from "react";
import { BOOK_LIST } from "../../data/constants";
import Product from "../Product/Product";
import "./productList.css";

const ProductsList = ({ cart, addItemToCart, removeItemItemFromCart }) => {
	return (
		<>
			<h1>Books Available</h1>
			<div className="container">
				<ul className="productsContainer">
					{BOOK_LIST.map((book) => {
						return (
							<li key={book.id}>
								<Product
									book={book}
									cart={cart}
									addItemToCart={addItemToCart}
									removeItemItemFromCart={removeItemItemFromCart}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default ProductsList;
