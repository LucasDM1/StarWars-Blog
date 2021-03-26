import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white display-4 py-2">
						<img
							src="https://cdn.discordapp.com/attachments/700786837156790405/824846063206662154/star-wars-logo.png"
							alt=""
							width="160"
							height=""
							className="d-inline-block align-text-top"
						/>
					</span>
				</Link>
			</div>
		</nav>
	);
};
