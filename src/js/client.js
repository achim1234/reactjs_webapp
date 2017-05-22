import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Index from "./pages/Index";
import Initial from "./pages/Initial";
import Movies from "./pages/Movies";
import Layout from "./pages/Layout";
import Formular from "./pages/Formular";
import Email from "./pages/Email";
import Menu from "./pages/Menu";

import store from "./store";

const app = document.getElementById('app');

ReactDOM.render(

<div>	
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Index} />
				<Route path="initial" component={Initial} />

				<Route path="movies" component={Movies} />

				<Route path="formular" component={Formular} />
				<Route path="email" component={Email} />
				<Route path="menu" component={Menu} />



			</Route>
		</Router>
	</Provider>
</div>	
, 
app);


