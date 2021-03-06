import React from 'react';
import andafter from './images/andafter.gif';
import halfbothalfbrain from './images/gifs/halfbothalfbrain.gif';
import pacman from './images/gifs/pacman.gif';

function Projects(){
  let intro="⠀Here’s a collection of some of my recent projects! My focus is in React development, with a few side projects in Java, Python, and Solidity.";
  let hbhbText="⠀Combines two separate texts into a cohesive frankstein work of literature! Text can either be manually inputted by the user or generated from passages scraped off of Wikipedia excerpts. The frontend is built in react, complete with animations to deliver the output in an engaging presentation. The React site is then integrated with our Flask REST api, which works off of a “madlibs” style algorithm to parse parts of speech and form cohesive sentences. The applications of this site are endless. It can be used purely for entertainment purposes, such as mashing the Fresh Prince of Bel Air Theme Song with Shakespeare’s Macbeth. On the other hand, it can also present a unique perspective that incoorporates opposing partisan views and ideologies.";
  let aaText="⠀A story-based game prompt that prompts users to enter the next line based on a randomly generate keyword. The word must be present in the line in order for it to be validated, indicated by a green textbox. Players have up to 15 seconds to come up with a continuation of the story that includes the keyword, to add spontaneity and creativity to the game. A timer is displayed in the top right and when time is up, the complete story is presented to the player to enjoy!";
  let pmText="⠀A faithful recreation of a time-old classic! The application is written fully from scratch in Java, with only the assets being used from the original game. The application implements Javax Swing to construct the UI, and incoorporates Timers, KeyListeners, MouseListeners, EventHandlers, and AudioInputStreams to build out the full PACMAN experience! Each ghost is carefully designed to mimic the exact algorithm used by the original game. Blinky navigates a vector directly to PacMan. Pinky navigates a vector targeting 4 spots ahead of PacMan, preparing to ambush. Inky pursues PacMan when far way, but randomizes movement when close to PacMan (not the sharpest …). Clyde targets PacMan when in Scatter Mode, but randomizes direction while in pursuit mode.";
  return(
    <section id="projects">
      <div id="content" className="projectsContent">
        <h1 className="title">Featured Projects</h1>
        <p>{intro}</p>

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
            <p>{aaText}</p>
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
            <p>{hbhbText}</p>
          </div>
        </div>

        {/* AND AFTER */}
        <div className="projectsFlex">
          <div className="projectsBox">
            <img src={pacman} className="projectsPic" alt="And After"/>
            <div className="buttonsFlex">
              <a className="projectsLink" target="_blank" rel="noopener noreferrer" href="https://andafter.netlify.app/"><span role="img" aria-label="sparkles">✨</span> DEMO</a>
              <a className="projectsLink" target="_blank" rel="noopener noreferrer" href="https://github.com/ageor0114/pacman"><span role="img" aria-label="cabinet">🗄️</span> CODE</a>
            </div>
          </div>
          <div className="projectsText">
            <h2>PACMAN</h2>
            <p><i>Java, Swing</i></p>
            <p>{pmText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
