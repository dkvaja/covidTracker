import React from "react";
import AboutPage from "./About";
import ContactPage from "./Contact";
import ErrorPage from "./Error";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

const Handler = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Handler;
