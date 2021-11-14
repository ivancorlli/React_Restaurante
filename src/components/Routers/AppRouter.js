import React from "react";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Login from '../pages/login'
import Home from '../pages/Home/home'
import Error404 from '../pages/Home/Error404'

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
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="*">
          <Error404/>
        </Route>
      </Switch>
    </Router>
  );
}
