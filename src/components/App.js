import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './navigation'
import Hamburger from "./parts/pages/hamburger";
import Home from './parts/pages/home'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hamburger" component={Hamburger} />
        </Switch>
      </Router>
    </div>
  );
}