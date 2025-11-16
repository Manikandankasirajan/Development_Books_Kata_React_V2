import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="navBar">
				<h1 className="navHeader">
					<Link className="navLogo" to="/">
						Development Books
					</Link>
				</h1>

				<ul className="navLists">
					<li className="navListItems">
						<Link to="/cart" className="navLink">
							Cart
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
