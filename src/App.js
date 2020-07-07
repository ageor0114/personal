import React from 'react';
import './App.css';
import profile from './images/austin.PNG';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import patrick from './images/talks/Patrick-Austin.png';
import grad from './images/talks/Commencement.png';
import elon from './images/talks/Elon-Austin.png';
import tcs from './images/talks/THLI-TCS.png';

function App() {
  let placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, send me gp plz, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <center>
    <div className="header">
    <div id="content">
      <center><p><span role="img" aria-label="caution">⚠️</span> Hey, there! I ... um, wasn't expecting visitors. <span role="img" aria-label="eyes">👀</span> You've arrived at my corner of the interwebs. This site's not quite ready just yet but hold on tight!</p></center>
    </div>
    </div>

    {/* HEADER */}
    <header id="intro">
      <div id="content" className="introContent">
        <div className="introBox">
          <h1>Austin George</h1>
          <p>Computer Science</p>
          <p>UC Berkeley</p>
          <p>a2@berkeley.edu</p>
          <p>
            Ut enim ad minim, send me gp plz, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="anchorLinks">
          <AnchorLink className="anchorButton" href="#projects">PROJECTS</AnchorLink>
          <AnchorLink className="anchorButton" href="#talks">TALKS</AnchorLink>
          <AnchorLink className="anchorButton" href="#art">ART</AnchorLink>
          <AnchorLink className="anchorButton" href="#media">MEDIA</AnchorLink>
          </div>
        </div>
        <div className="profileBox">
          <img src={profile} className="profile" alt="my bootiful face"/>
        </div>
      </div>
    </header>

    {/* ABOUT */}
    <section id="about">
      <div id="content" className="aboutContent">
      <h1 className="title">About</h1>
      <p>{placeholder}</p>
      </div>
    </section>

    {/* PROJECTS */}
    <section id="projects">
      <div id="content" className="projectsContent">
      <h1 className="title">Projects</h1>
      <p>{placeholder}</p>
      </div>
    </section>

    {/* TALKS */}
    <section id="talks">
      <div id="content" className="talksContent">
        <h1 className="title">Talks</h1>
        <p>I've been really lucky to meet some incredibly insightful people whom I admire, and have had the pleasure of chatting with on topics ranging from challenging establishment tech to building sustainable teams. These talks are a series of conversations, addresses, and other jibber jabber from yours truly.</p>

        {/* Consider Mapping */}
        <div className="talksFlex">
          <div className="talksBox">
            <img src={patrick} className="talksPic" alt="Patrick Collison AMA"/>
            <a className="watch" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=DvROZ-OBszU"><span role="img" aria-label="play">▶️</span> WATCH</a>
          </div>
          <div className="talksText">
            <h2>Patrick Collison AMA</h2>
            <p>{placeholder}</p>
          </div>
        </div>

        <div className="talksFlex">
          <div className="talksBox">
            <img src={grad} className="talksPic" alt="Valedictorian Commencement Address"/>
            <a className="watch" target="_blank" rel="noopener noreferrer" href="https://www.greatneck.k12.ny.us/Page/14827"><span role="img" aria-label="play">▶️</span> WATCH</a>
          </div>
          <div className="talksText">
            <h2>Valedictorian Commencement Address</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <br/>
        <div className="talksFlex">
          <div className="talksBox">
            <img src={elon} className="talksPic" alt="Elon Musk AMA"/>
            <a className="watch" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=EXflAAxTWHI"><span role="img" aria-label="play">▶️</span> WATCH</a>
          </div>
          <div className="talksText">
            <h2>Elon Musk AMA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          </div>
        </div>
        <br/>
        <div className="talksFlex">
          <div className="talksBox">
            <img src={tcs} className="talksPic" alt="Speaker Series: THLI & TCS"/>
            <a className="watch" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Cb_wpcjJlvg"><span role="img" aria-label="play">▶️</span> WATCH</a>
          </div>
          <div className="talksText">
            <h2>Speaker Series: TeenHacks LI & CEO of TheCoderSchool</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
          </div>
        </div>

      </div>
    </section>

    {/* ART */}
    <section id="art">
      <div id="content" className="artContent">
      <h1 className="title">Art</h1>
      <p>{placeholder}</p>
      </div>
    </section>

    {/* MEDIA */}
    <div id="media">
      <div id="content" className="mediaContent">
      <h1 className="title">Media</h1>
      <p>{placeholder}</p>
      </div>
    </div>

    {/* FOOTER */}
    <div id="footer">
      <div id="content" className="footerContent">
      <center><p>Made with <span role="img" aria-label="blueheart">💙</span> by <a className="name" href="https://github.com/ageor0114">Austin George</a>.</p></center>
      </div>
    </div>
    </center>
  );
}

export default App;
