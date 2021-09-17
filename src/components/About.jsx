import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import avtar from "../Images/avtar.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

const About = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      marginBottom: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <div className="about-div flex-column-center footer-fix">
      <h1 className="about-heading">About Me</h1>
      <div className="about-box flex-column-center">
        <Avatar alt="Remy Sharp" src={avtar} className={classes.large} />
        <p className="about-desc">
          Hello World! I am Dushyant Vaja. I am a developer!
        </p>
        <div className="about-sm-box flex-center">
          <a href="https://www.linkedin.com/in/dushyantvaja/" target="_blank">
            <LinkedInIcon className="sm-icon" />
          </a>
          <a href="https://www.linkedin.com/in/dushyantvaja/" target="_blank">
            <InstagramIcon className="sm-icon" />
          </a>
          <a href="https://www.linkedin.com/in/dushyantvaja/" target="_blank">
            <GitHubIcon className="sm-icon" />
          </a>
          <a href="https://www.linkedin.com/in/dushyantvaja/" target="_blank">
            <FacebookIcon className="sm-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
