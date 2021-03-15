import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './navigation'
import Hamburger from "./parts/pages/hamburger";
import Home from './parts/pages/home'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="content-wrapper">
            <NavContainer />
            <div className="body">
              <Switch>
                <Route exact path="/" component={Home} />
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
}