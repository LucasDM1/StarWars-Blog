import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Home } from "./views/home";
import { CharactersDet } from "./views/charactersDetails";
import { PlanetsDet } from "./views/planetsDetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Carousel } from "./component/carousel";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Carousel />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/characters/:id">
							<CharactersDet />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planets/:id">
							<PlanetsDet />
						</Route>
						<Route>Not Found</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
