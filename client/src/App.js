import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Main from "./components/Main";
import Introduction from "./components/Introduction";
import SearchBus from "./components/SearchBus";

function App() {
  return (
    <Router>
      <div>
        <Main>
          <Switch>
            <Route path="/searchbus">
              <SearchBus />
            </Route>
            <Route path="/">
              <Introduction />
            </Route>
          </Switch>
        </Main>
      </div>
    </Router>
  );
}

export default App;
