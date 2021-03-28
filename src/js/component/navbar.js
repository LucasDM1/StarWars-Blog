import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
				<div className="nav-item dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						href="#"
						id="navbarDropdown"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<span className="badge">{store.favorites.length}</span>
						Favorites
					</button>
					<div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="navbarDropdown">
						{store.favorites.length > 0 ? (
							store.favorites.map((fav, index) => {
								return (
									<a
										key={index}
										onClick={() => actions.RemoveFav(index)}
										className="dropdown-item justify-content-center text-white">
										{fav.name + " "}
										<i className="fas fa-trash" />
									</a>
								);
							})
						) : (
							<a className="justify-content-center text-white"> (empty) </a>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
