React Cheat Sheet:

Bootstrap: 
	install: npm i bootstrap@4.1.1
	import "bootstrap/dist/css/bootstrap.css"

Axios: 
	install: npm i axios@0.18
	import axios from "axios";

Joi: 
	install: npm i joi-browser
	import Joi from "joi-browser";

Router: 
	install: npm i react-router-dom
  
  BrowserRouter:-
  index.js:
	import {BrowserRouter} from "react-router-dom";

	ReactDOM.render(
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>, document.getElementById("root")
	);

	app.js:
		import { Switch, Route, Redirect} from "react-router-dom";

		<Switch>
			<Router path-"" exact component={} />
			<Router path="" exact render={(props) => <MyComponent {...props} />}
			<Redirect from="" to="" />
			<Redirect to=""/>
		</Switch>

	navbar.jsx:
		import {NavLink, Link} from "react-router-dom";

		<Link className="" to=""></Link>
		<NavLink to="/movies" className=""></NavLink>
		




