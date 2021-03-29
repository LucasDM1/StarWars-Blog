import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container mb-3 p-3">
		<div className="row px-2">
			<div className="col-6">
				<div className="card bg-dark text-white">
					<img
						src="https://fictionhorizon.com/wp-content/uploads/2020/07/STarWars-1-1.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Star Wars Characters</h5>
						<p className="card-text">Learn more about your favorite Star Wars characters</p>
						<Link to="/characters">
							<button className="btn btn-outline-primary">Read more</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-6 ">
				<div className="card bg-dark text-white">
					<img
						src="https://fondosmil.com/fondo/33989.jpg"
						className="card-img-top"
						alt="..."
						style={{ height: "300px", width: "400" }}
					/>
					<div className="card-body">
						<h5 className="card-title">Star Wars Planets</h5>
						<p className="card-text">Explore all facinating planets that the Star Wars Universe has</p>
						<Link to="/planets">
							<button className="btn btn-outline-primary">Read more</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
		<Link to="/carousel">
			<button className="btn btn-outline-primary">Read more</button>
		</Link>
	</div>
);
