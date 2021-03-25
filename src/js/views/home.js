import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="col-12">
		<div className="card">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Star Wars Characters</h5>
				<p className="card-text">Learn more about your favorites Star Wars characters</p>
				<Link to="/characters">
					<button className="btn btn-primary">Read more</button>
				</Link>
			</div>
		</div>
		<div className="card">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Star Wars Planets</h5>
				<p className="card-text">
					Explore all the differents and facinating planets that the Star Wars Universe have..
				</p>
				<Link to="/planets">
					<button className="btn btn-primary">Read more</button>
				</Link>
			</div>
		</div>
	</div>
);
