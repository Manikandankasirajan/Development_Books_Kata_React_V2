import React from "react";
import getCartDetails from "../../utils/getCartDetails";

const Cart = ({ cart }) => {
	const bookCount = cart.length;
	const [bookTitleAndCount, priceAfterDiscount] = getCartDetails(cart);
	const actualPrice = bookCount * 50;
	const discountPrice = bookCount * 50 - priceAfterDiscount;

	return (
		<>
			<h2>Cart</h2>
			{bookCount === 0 ? (
				<h4>The Cart is Empty...</h4>
			) : (
				<div>
					<ul>
						{bookTitleAndCount.map(([title, count]) => {
							return (
								<li key={title}>
									{title} Quanity : {count}
								</li>
							);
						})}
					</ul>
					<p>Actual Price : &#x20b9; {actualPrice}</p>
					<p>Discount Price : &#x20b9; {discountPrice}</p>
					<p>Price After Discount : &#x20b9; {priceAfterDiscount}</p>
				</div>
			)}
		</>
	);
};

export default Cart;
