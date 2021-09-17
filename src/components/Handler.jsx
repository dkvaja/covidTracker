import React from "react";
import AboutPage from "./About";
import ContactPage from "./Contact";
import ErrorPage from "./Error";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

const Handler = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Handler;
