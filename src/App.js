import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/MainSection/Main";
import { Contact } from "./components/Contact/Contact";
import { FeaturedWork } from "./components/FeaturedWork/FeaturedWork";
// import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main />
          <FeaturedWork />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}
