import React from 'react';

function About(){
  let summary = "Hi, I'm Austin! I'm a software engineer & artist who is passionate about crafting tools that enable others to create. You can check out some of my work below. Right now, I'm contributing to the development of Berkeleytime — a progressive course catalog serving 50,000 monthly users. If you'd like to get in touch, you can reach me at a2@berkeley.edu. I love talking about great design, mindfulness, and philosophy!";
  return(
    <section id="about">
      <div id="content" className="aboutContent">
      <h1 className="title">About</h1>
      <p>{summary}</p>
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
