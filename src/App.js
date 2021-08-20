import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Search from "./Search";
import SearchPage from "./SearchPage";
function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
            {/* <h1> This is the search page </h1> */}
          </Route>

          <Route path="/users"></Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
