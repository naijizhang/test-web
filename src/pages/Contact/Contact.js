import React from 'react';
import { withStyles } from '@material-ui/core';
import { Mail, Phone } from '@material-ui/icons';
import styles from './index.scss';
import linkedin from '../../images/icons/white-linkedin.png';
import angellist from '../../images/icons/angellist.png';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';


const Contact = () => {
  const gif = require("../../images/drone.gif");
  return (
    <section className="container">
      <div className="contact" id="contact">
        <div className="header-wrapper">
          <h1 className="title">Contact Me</h1>
          <img src={GreyMob} className="greybg greybg-mob" alt="" />
          <img src={GreyDesk} className="greybg greybg-desk" alt="" />
        </div>

        <div className="info-wrapper">
          <div className="text-wrapper">
            <p className="text">
              Looking for someone with enthusiasm, positive energy, and a can-do
              attitude? Then I'm the right candidate for you! Don't see it? Why
              don't we meet in person?
            </p>
          </div>
        </div>
        <img  className="gif" src={gif}/>

        <div className="icon-container">
          {/* <div className="icon-wrapper">
            <Phone className="icon" /> 604-780-6231
          </div> */}
          <a className="icon-wrapper" href={`mailto: naijizhang@gmail.com`}>
            <Mail className="icon" /> naijizhang@gmail.com
          </a>

          <a
            target="_blank"
            rel="noopener norefferer"
            className="icon-wrapper"
            href="https://angel.co/naiji-zhang-1"
          >
            <img src={angellist} className="icon" alt="AngelList" />
            AngelList
          </a>
          <a
            target="_blank"
            rel="noopener norefferer"
            className="icon-wrapper"
            href="https://www.linkedin.com/in/naiji-zhang-8ab433168/"
          >
            <img src={linkedin} className="icon" alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="contact-images">
       
      </div>

      <p className="credit">
        <a
          className="author"
          target="_blank"
          rel="noopener norefferer"
          href="https://www.linkedin.com/in/naiji-zhang-8ab433168/"
        >
          Naiji Zhang
        </a>
        &copy; 2019. Built with React, SCSS, and Material-UI.
      </p>
    </section>
  );
};

export default withStyles(styles)(Contact);
