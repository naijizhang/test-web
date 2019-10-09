import React, { Component } from "react";
import { Link } from "react-scroll";
import { withStyles } from "@material-ui/core/styles";
import styles from "./index.scss";
import github from "../../images/icons/github.png";

class Menubar extends Component {
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const navbar = (
      <div className="navlinks">
        <Link
          activeClass="active"
          className="links"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="about"
          className="links about-link"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>

        <Link
          to="projects"
          className="links"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          projects
        </Link>
        <Link
          to="contact"
          className="links"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          contact
        </Link>

        <a
          target="_blank"
          rel="noopener norefferer"
          href="https://github.com/naijizhang"
          className="links github-nav"
        >
          <img alt="" className="github" src={github} />
          github
        </a>
      </div>
    );

    return <div className="menubar">{navbar}</div>;
  }
}

export default withStyles(styles)(Menubar);
