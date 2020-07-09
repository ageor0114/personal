import React from 'react';
import { ART } from './art';
import Gallery from 'react-photo-gallery';

function Portfolio(){
  return(
    <section id="art">
      <div id="content" className="artContent">
      <h1 className="title">Art</h1>
      <p>⠀⠀I love creating — in all forms! Be it spray paint or linolium carving, art provides an outlet of creative expression I've yet to find anywhere else. It's not unlikeley to find me at 2am, sketching in my bed while jamming out to 70s soft-rock. My escapades in acrylic and ink undoubtedly influence my design decisions — striving for creations that are not only functional, but equally enjoyable to interact with.</p>
      <Gallery photos={ART} direction={"column"} columns={4} />
      </div>
    </section>
  );
}

export default Portfolio;
