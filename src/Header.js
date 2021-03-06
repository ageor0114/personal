import React from 'react';
import profile from './images/austin.PNG';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from './images/icons/resume.svg';
import github from './images/icons/github.svg';
import linkedin from './images/icons/linkedin.svg';
import mail from './images/icons/mail.svg';


function Header(){
  return(
    <header id="intro">
      <div id="content" className="introContent">
        <div className="introBox">
          <h1 className="name">Austin George</h1>
          <p>Computer Science, UC Berkeley</p>
          <a className="email" href="mailto:a2@berkeley.edu" target="_blank" rel="noopener noreferrer"><p>a2@berkeley.edu</p></a>
          <p><i>"I use em-dashes more often than I probably should ..."</i></p>
          <div className="iconsFlex">
            <a className="icon" href="https://linkedin.com/austinzg"  target="_blank" rel="noopener noreferrer"><img alt="resume" src={resume}/></a>
            <a className="icon" href="mailto:a2@berkeley.edu" target="_blank" rel="noopener noreferrer"><img alt="mail" src={mail}/></a>
            <a className="icon" href="https://www.linkedin.com/in/austinzg/"  target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={linkedin}/></a>
            <a className="icon" href="https://github.com/ageor0114"  target="_blank" rel="noopener noreferrer"><img alt="github" src={github}/></a>
          </div>
          <div className="anchorLinks">
          <AnchorLink className="anchorButton" href="#projects">PROJECTS</AnchorLink>
          <AnchorLink className="anchorButton" href="#talks">TALKS</AnchorLink>
          <AnchorLink className="anchorButtonEnd" href="#art">ART</AnchorLink>
          </div>
        </div>
        <div className="profileBox">
          <img src={profile} className="profile" alt="my bootiful face"/>
        </div>
      </div>

      {/*Tilt Divider*/}
      <div className="headerTilt">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>
    </header>
  );
}

export default Header;
