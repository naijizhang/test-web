import BoomHome from "../../images/projects/boomtown.png";
import monkiri from "../../images/projects/monkiri2.gif";
import mash from "../../images/projects/mash.gif";
import R10 from "../../images/projects/R10.png";
import soc from "../../images/projects/soc.png";
import aurel from "../../images/projects/aurel.png";

export const tileData = [
  {
    id: 6,
    img: [aurel],
    title: "Aurel Systems Inc.",
    description:
      'I designed and implemented this 65-page website independently for Aurel Systems Inc when I was a Web Development Intern.',
    tech: "WordPress, Bootstrap, SCSS, JavaScript, jQuery, PHP",
    github: "https://github.com/naijizhang/aurel-website"
  },
  {
    id: 5,
    img: [monkiri],
    title: "Monkiri Mobile App",
    description:
      "Worked in a team of 4 developers to build a fully functioning Financial Learning App for our client. In this project, I built the popup components, onbording components, lesson library components, and some of lesson stages.",
    tech: "React-Native, GraphQL, Apollo",
    github: "https://github.com/naijizhang/monkiri-spring-2019"
  },
  {
    id: 4,
    img: [R10],
    title: "R10",
    description:
      "R10 is a cross-platform (iOS/Android) mobile application. It is a scheduling app for the upcoming R10 developer conference.",
    tech: "React-Native, GraphQL, AsyncStorage",
    github: "https://github.com/naijizhang/R10-Mobile-App"
  },
  {
    id: 3,
    img: [mash],
    title: "Mash",
    description:
      "Worked in a team of 4 developers. It is a website for connecting local musicians in order to collaborate on music creations and gigs. My part is to build the back-end, the User connection functionalities, and the audio player component.",
    tech: "Meteor, MongoDB, React, Material UI, Google Maps API",
    github: "https://github.com/naijizhang/Mash"
  },
  {
    id: 2,
    img: [BoomHome],
    title: "Boomtown",
    description:
      "A web application where users can share and borrow items from one another.",
    tech: "React, Redux, PostgrSQL, GraphQL, Apollo, Node, Material UI",
    github: "https://github.com/naijizhang/boomtown"
  },
  {
    id: 1,
    img: [soc],
    title: "Sport on Campus",
    description:
      "Worked in a team of four. This is a fully responsive webpage for Sport on Campus, making it easier to connect student athletes with universities in North America.",
    tech: "JavaScript, jQuery, PHP, WordPress",
    github: "https://github.com/naijizhang/soc-winter-2019",
    link: "https://sportoncampus.com/"
  }
];

export default tileData;
