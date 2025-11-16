import React from "react";

const Cart = ({ cart }) => {
	const bookCount = cart.length;
	return (
		<>
			<h2>Cart</h2>
			{bookCount === 0 && <h6>The Cart is Empty...</h6>}
		</>
	);
};

export default Cart;
