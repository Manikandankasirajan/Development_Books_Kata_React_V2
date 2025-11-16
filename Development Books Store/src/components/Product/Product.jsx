import React from "react";
import "./product.css";
import createBookTitleAndCountMapObject from "../../utils/createBookTitleAndCountMapObject";

const Product = ({ book, cart, addItemToCart, removeItemItemFromCart }) => {
	const bookTitleAndCountMap = createBookTitleAndCountMapObject(cart);
	return (
		<>
			<div className="productContainer">
				<img className="bookImage" src={book.imgSrc} alt="{title}" />
				<h2 title={book.title} className="title">
					{book.title.length > 15
						? book.title.slice(0, 15) + "..."
						: book.title}
				</h2>
				<h4 className="h4rice">&#x20b9; {book.price}</h4>
				<div className="btnContainer">
					<button
						className="btn"
						onClick={() => removeItemItemFromCart(book.title)}
						disabled={!bookTitleAndCountMap[book.title]}>
						-
					</button>
					<h4 className="quantity">{bookTitleAndCountMap[book.title] || 0}</h4>
					<button className="btn" onClick={() => addItemToCart(book.title)}>
						+
					</button>
				</div>
			</div>
		</>
	);
};

export default Product;
