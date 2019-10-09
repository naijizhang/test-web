import React from 'react';
import { Link } from 'react-scroll';
import { withStyles } from '@material-ui/core';
import styles from './index.scss';
import { Slide } from 'react-reveal';
import { KeyboardArrowDown } from '@material-ui/icons';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <section>
        <Slide right cascade>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            // duration={500}
          >
            <div className="title-wrapper">
              <h1 className="home-title">
                Hello<span className="reverse">!</span> I'm
              </h1>

              <div className="row">
                <h1 className="home-title">
                  Naiji <span className="reverse">Zhang</span>,
                </h1>
              </div>

              <h1 className="home-title third-line">Front End Developer.</h1>
            </div>
          </Link>
        </Slide>
        <h2 className="subheading">
          {/* Dynamic / Talented / Passionate */}
          {/* Problem Solver / Resourceful / Creative */}
          Reliable / Quick Learner /  Master's Degree in IT Security
        </h2>

        <div className="btn-wrapper">
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            // duration={500}
          >
            <button className="slide home-btn">View my work</button>
          </Link>
        </div>
      </section>

      <Link
        to="about"
        className="scroll-btn"
        activeClass="active"
        spy={true}
        smooth={true}
      >
        <span className="scroll-ani">
          <KeyboardArrowDown fontSize="large" />
        </span>
        <p>Scroll</p>
      </Link>
    </div>
  );
};

export default withStyles(styles)(Home);
