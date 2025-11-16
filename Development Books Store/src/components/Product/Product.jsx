import React from "react";

const Product = ({ book }) => {
	return (
		<>
			<div className="productContainer">
				<img className="bookImage" src={book.imgSrc} alt="{title}" />
			</div>
		</>
	);
};

export default Product;
