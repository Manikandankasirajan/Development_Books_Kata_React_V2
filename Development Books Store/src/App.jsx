import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	const [cart, setCart] = useState([]);
	const addItemToCart = (book) => {
		setCart([...cart, book]);
	};
	const removeItemItemFromCart = (book) => {
		setCart(
			cart.filter(
				(item, index, arr) => index !== arr.findIndex((ar) => ar === book)
			)
		);
	};
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={
							<ProductsList
								cart={cart}
								addItemToCart={addItemToCart}
								removeItemItemFromCart={removeItemItemFromCart}
							/>
						}
					/>
					<Route path="/cart" element={<Cart cart={[]} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
