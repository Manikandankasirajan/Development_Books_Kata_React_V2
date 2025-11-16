import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductsList />} />
					<Route path="/cart" element={<Cart cart={[]} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
