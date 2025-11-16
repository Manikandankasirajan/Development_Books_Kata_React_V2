import React from "react";
import "./navbar.css";

const NavBar = () => {
	return (
		<>
			<nav className="navBar">
				<h1 className="navHeader">
					<a href="/" className="navLogo">
						Development Books
					</a>
				</h1>

				<ul className="navLists">
					<li className="navListItems">
						<a className="navLink" href="/Cart">
							Cart
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
