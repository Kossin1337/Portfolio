import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Main } from "./components/MainSection/Main.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { AboutPage } from "./components/About/AboutPage.jsx";
import { FeaturedWork } from "./components/FeaturedWork/FeaturedWork.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main />
          <FeaturedWork />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
