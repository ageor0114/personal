import React from 'react';
import andafter from './images/andafter.gif';
import halfbothalfbrain from './images/gifs/halfbothalfbrain.gif';

function Projects(){
  let placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, send me gp plz, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return(
    <section id="projects">
      <div id="content" className="projectsContent">
        <h1 className="title">Featured Projects</h1>
        <p>{placeholder}</p>

        {/* AND AFTER */}
        <div className="projectsFlex">
          <div className="projectsBox">
            <img src={andafter} className="projectsPic" alt="And After"/>
            <div className="buttonsFlex">
              <a className="projectsLink" target="_blank" rel="noopener noreferrer" href="https://andafter.netlify.app/"><span role="img" aria-label="sparkles">✨</span> DEMO</a>
              <a className="projectsLink" target="_blank" rel="noopener noreferrer" href="https://github.com/ageor0114/the-new-age"><span role="img" aria-label="cabinet">🗄️</span> CODE</a>
            </div>
          </div>
          <div className="projectsText">
            <h2>And After</h2>
            <p><i>React</i></p>
            <p>{placeholder}</p>
          </div>
        </div>

        {/* HALF BOT HALF BRAIN */}
        <div className="projectsFlex">
          <div className="projectsBox">
            <img src={halfbothalfbrain} className="projectsPic" alt="HalfBot HalfBrain"/>
            <div className="buttonsFlex">
              <a className="projectsLink" target="_blank" rel="noopener noreferrer" href="https://halfbothalfbrain.netlify.app/"><span role="img" aria-label="sparkles">✨</span> DEMO</a>
              <a className="projectsLink" target="_blank" rel="noopener noreferrer" href="https://github.com/ageor0114/nyit-hackathon"><span role="img" aria-label="cabinet">🗄️</span> CODE</a>
            </div>
          </div>
          <div className="projectsText">
            <h2>Half Bot Half Brain</h2>
            <p><i>React, Python, Flask</i></p>
            <p>{placeholder}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
