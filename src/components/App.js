import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './navigation'
import Home from './parts/home'
import Hamburger from "./parts/hamburger";
import ShowHide from "./parts/show-hide"
import Toggle from "./parts/toggle"
import Counter from "./parts/counter"
import FontSizer from "./parts/font-sizer"
import Align from "./parts/align"
import Color from "./parts/color"
import Clock from "./parts/clock"

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="content-wrapper">
          <Navigation />
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/hamburger" component={Hamburger} />
              <Route path="/show-hide" component={ShowHide} />
              <Route path="/toggle" component={Toggle} />
              <Route path="/counter" component={Counter} />
              <Route path="/font-sizer" component={FontSizer} />
              <Route path="/align" component={Align} />
              <Route path="/color" component={Color} />
              <Route path="/clock" component={Clock} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}