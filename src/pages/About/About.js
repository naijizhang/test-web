import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./index.scss";
import profileMobile from "../../images/naiji.jpeg";
import GreyMob from "../../images/bg/GreyMob.png";
import GreyDesk from "../../images/bg/GreyDesk.png";

const About = () => {
  const gif = require("../../images/skydiving.gif");

  return (
    <div className="container about" id="about">
      <div className="header-wrapper">
        <h1 className="title">About Me</h1>
        <img src={GreyMob} className="greybg greybg-mob" alt="" />
        <img src={GreyDesk} className="greybg greybg-desk" alt="" />
      </div>

      <section className="about-content-wrapper">
        <div className="sectionOne">
          <img
            src={profileMobile}
            className="profile-mobile"
            width="300"
            alt="Naiji Zhang"
          />

          <div className="text-wrapper">
            <p className="text">
              I have been learning IT for about six years. Coding is never an
              annoying thing for me, but it is one of my hobbies. My curiosity
              drives me to continuously learn and grow whether it’s learning how
              to detect hacking activities, how to build cross-platform
              applications, understand blockchain. I am not afraid of new
              challenges. I'm willing to try difficult things or learn new
              skills, like skydiving in vancouver and learning react. I love
              coding.
            </p>

            <p className="text">
              As I dive deeper into the world of development and technology, my
              passion for it grows stronger. After six years of IT learning and
              short-term Web development internship, I am more interested in Web
              and App development. It’s challenging, evolving, and it’s the
              future. The tech world is ever-changing and I want to work in a
              team to create something amazing together.
            </p>
          </div>
        </div>

        <div className="sectionTwo">
          <img  className="gif" src={gif}/>
          <div className="text-wrapper">
            <p className="text">
              I'm a full-stack developer with a focus in front-end technologies
              including
              <span className="techs">
                {" "}
                CSS, SCSS, React, React-Native, JavaScript, jQuery, and PHP.{" "}
              </span>
              I want to continue to learn and grow as I develop my skills and
              improve on writing code. I have great energy, a "can-do" attitude,
              and I'm always working towards improving myself everyday.
            </p>
            <p className="text">
              If you love discussing new ideas or are in tech, let’s connect!
              I’d love to chat about new technology, my expertise, your
              expertise and how we might work together!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withStyles(styles)(About);
