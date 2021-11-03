import React from "react";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Login from '../pages/login'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="*">
          <h1 className="text-center">ERROR 404</h1>
        </Route>
      </Switch>
    </Router>
  );
}
