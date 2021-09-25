import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ContactPage from "./components/Contact";
import AboutPage from "./components/About";
import ErrorPage from "./components/Error";

import {
  HashRouter as Router,
  Redirect,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router basename='/' >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
