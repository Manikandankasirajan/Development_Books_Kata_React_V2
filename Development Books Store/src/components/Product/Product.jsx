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
			</div>
		</>
	);
};

export default Product;
