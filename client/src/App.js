import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div>
        <Main>
          <Switch>
            <Route path="/result">
              <div>SearchResult</div>
            </Route>
            <Route path="/">
              <div>Data</div>
            </Route>
          </Switch>
        </Main>
      </div>
    </Router>
  );
}

export default App;
