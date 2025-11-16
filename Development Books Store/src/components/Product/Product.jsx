import React from "react";

const Product = ({ book }) => {
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
					<button className="btn">-</button>
					<h6 className="quantity">0</h6>
					<button className="btn">+</button>
				</div>
			</div>
		</>
	);
};

export default Product;
