import React from 'react';

function About(){
  let placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, send me gp plz, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return(
    <section id="about">
      <div id="content" className="aboutContent">
      <h1 className="title">About</h1>
      <p>{placeholder}</p>
      <p>{placeholder}</p>
      </div>

      <div className="aboutTilt">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>
    </section>
  );
}

export default About;
