import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Users from "./users/pages/Users";
import Places from "./places/pages/Places";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/places/new" exact>
          <Places></Places>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
