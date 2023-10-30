import React, { useEffect, useRef, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ScrollableImages = () => {
    return (
      <ParallaxProvider>
        <div className="we__img">
          <Parallax y={[-20, 20]} tagOuter="figure">
            <img src="img/layout1.png" alt="" className="we__layout1" />
          </Parallax>
          <img src="img/layout2.png" alt="" className="we__layout2" />
          <Parallax y={[-40, 20]} tagOuter="figure">
            <img src="img/layout3.png" alt="" className="we__layout3" />
          </Parallax>
        </div>
      </ParallaxProvider>
    );
  };
  
  export default ScrollableImages;