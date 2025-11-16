import React from "react";
import getCartDetails from "../../utils/getCartDetails";

const Cart = ({ cart }) => {
	const bookCount = cart.length;
	const bookTitleAndCount = getCartDetails(cart);

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
					<p>Actual Price : &#x20b9; {bookCount * 50}</p>
				</div>
			)}
		</>
	);
};

export default Cart;
