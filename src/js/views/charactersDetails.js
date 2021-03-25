import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	// useEffect(() => {
	// 	actions.getPeople();
	// }, []);
	return (
		<div className="container">
			{/* {store.people.map((element, index) => {
				<div className="card">
					<div className="card-body">{element}</div>
				</div>;
			})} */}
			{console.log(store.people)}
		</div>
	);
};
