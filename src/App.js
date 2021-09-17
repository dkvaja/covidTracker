import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Handler from './components/Handler';
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
      <Handler/>
      </Router>
      <Footer />
    </>
  );
};

export default App;
