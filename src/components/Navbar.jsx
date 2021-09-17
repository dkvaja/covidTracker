import { React, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Logo from ".././Images/logo.png";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import Brightness3RoundedIcon from "@material-ui/icons/Brightness3Rounded";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

const Navbar = () => {
  const [mode, setMode] = useState("#171624");

  function handleMode() {
    let clr;
    clr = mode === "#171624" ? "white" : "#171624";
    document.body.style.backgroundColor = clr;
    setMode(clr);
  }
  return (
    <nav className="navbar">
      <div className="logo-div flex-center">
        <img src={Logo} alt="covid logo" />
        <h1>
          COVID-19 <span className="sub-logo">LiveTracker</span>
        </h1>
      </div>
      <ul className="nav-links flex-center">
        <li className="link-list ">
          <Link to="/" className="links">
            <HomeRoundedIcon className="icon-item flex-center" />
          </Link>
        </li>
        <li className="link-list ">
          <Link to="/contact" className="links">
            <CallRoundedIcon className="icon-item flex-center" />
          </Link>
        </li>
        <li className="link-list ">
          <Link to="/about" className="links">
            <InfoRoundedIcon className="icon-item flex-center" />
          </Link>
        </li>
        {mode !== "white" ? (
          <button className="mode-btn" onClick={handleMode}>
            <WbSunnyRoundedIcon className="links icon-item btn" />
          </button>
        ) : (
          <button className="mode-btn" onClick={handleMode}>
            <Brightness3RoundedIcon className="links icon-item btn" />
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
