import React from "react";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Login from '../pages/login'
import Home from '../pages/Home/home'
import Error404 from '../pages/Home/Error404'
import Contact from '../Contact/Contact'
import About from '../About/About'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
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
