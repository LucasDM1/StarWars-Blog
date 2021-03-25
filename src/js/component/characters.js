import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h1>Characters </h1>
			{store.people.map((character, index) => {
				return (
					<div key={index} className="col-4">
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-text">Learn more about your favorites Star Wars characters</p>
								<Link to="/">
									<button className="btn btn-primary">Read more</button>
								</Link>
							</div>
						</div>
					</div>
				);
			})}
			{console.log(store.people)}
		</div>
	);
};
