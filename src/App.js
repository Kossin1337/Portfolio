import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/MainSection/Main";
import { Contact } from "./components/Contact/Contact";
// import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}
