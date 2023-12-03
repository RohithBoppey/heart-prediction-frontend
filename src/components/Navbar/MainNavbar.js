// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom"; // Make sure to install react-router-dom if not already installed

import "./navbar.css";

const MainNavbar = () => {
	return (
		<div
			className="custom-navbar"
			style={{
				backgroundColor: "white",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
				padding: "10px",
			}}>
			<div className="custom-logo">
				<img
					src="https://i.pinimg.com/originals/2e/1e/ce/2e1ece718fe77a9c6246788056aa1e4b.gif"
					alt="Logo"
					style={{ maxWidth: "50px", maxHeight: "50px" }} // Set max width and height for the logo
				/>
				<h3 style={{ marginLeft: 20, color: "#07074D" }}>
					<NavLink
						to="/"
						activeClassName="custom-active-link"
						style={{ color: "#07074D" }}>
						Heart Failure Prediction
					</NavLink>
				</h3>
			</div>
			<div className="custom-nav-links">
				<NavLink
					to="/check-heart-status"
					activeClassName="custom-active-link"
					style={{ color: "#07074D" }}>
					Check your heart rate
				</NavLink>
				<NavLink
					to="/how-it-works"
					activeClassName="custom-active-link"
					style={{ color: "#07074D" }}>
					How it works?
				</NavLink>
				<a
					href="http://github.com"
					rel="noopener noreferrer"
					activeClassName="custom-active-link"
					style={{ color: "#07074D" }}>
					GitHub Repo
				</a>
			</div>
		</div>
	);
};

export default MainNavbar;
