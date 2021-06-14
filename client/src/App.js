import { Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import TA from "./pages/TA";

const App = () => (
	<Switch>
		<Route path="/" exact><Home /></Route>
		<Route path="/TA"><TA /></Route>
		<Route path="/about/this/site"><About /></Route>
	</Switch>
);

export default App;
