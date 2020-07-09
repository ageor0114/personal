import React from 'react';
import patrick from './images/talks/Patrick-Austin.png';
import grad from './images/talks/Commencement.png';
import elon from './images/talks/Elon-Austin.png';
import tcs from './images/talks/THLI-TCS.png';

function Talks(){
  let placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, send me gp plz, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return(
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
    <br/>
    <br/>

    {/*Tilt Divider*/}
    <div class="talksTilt">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
  );
}

export default Talks;
