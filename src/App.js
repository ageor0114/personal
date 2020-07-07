import React from 'react';
import './App.css';

function App() {
  let placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <center>
    {/* HEADER */}
    <header className="intro">
      <div id="content" className="introContent">
      <h1>Hey, there!</h1>
      <p>
        I'm Austin George, an incoming freshman at UC Berkeley! You've arrived at my corner of the interwebs. It's not quite ready just yet but hold on tight!
      </p>
      </div>
    </header>

    {/* ABOUT */}
    <section className="about">
      <div id="content" className="aboutContent">
      <h1 className="title">About</h1>
      <p>{placeholder}</p>
      </div>
    </section>

    {/* PROJECTS */}
    <section className="projects">
      <div id="content" className="projectsContent">
      <h1 className="title">Projects</h1>
      <p>{placeholder}</p>
      </div>
    </section>

    {/* TALKS */}
    <section className="talks">
      <div id="content" className="talksContent">
      <h1 className="title">Talks</h1>
      <p>I've been really lucky to meet some incredibly insightful people whom I admire, and have had the pleasure of chatting with them on topics ranging from ___ to ___. These talks are a series of conversations, addresses, and other jibber jabber from yours truly.</p>
      <p>{placeholder}</p>
      </div>
    </section>

    {/* ART */}
    <section className="art">
      <div id="content" className="artContent">
      <h1 className="title">Art</h1>
      <p>{placeholder}</p>
      </div>
    </section>

    {/* MEDIA */}
    <div className="media">
      <div id="content" className="mediaContent">
      <h1 className="title">Media</h1>
      <p>{placeholder}</p>
      </div>
    </div>

    {/* FOOTER */}
    <div className="footer">
      <div id="content" className="footerContent">
      <center><p>Made with <span role="img" aria-label="blueheart">💙</span> by Austin George.</p></center>
      </div>
    </div>
    </center>
  );
}

export default App;
