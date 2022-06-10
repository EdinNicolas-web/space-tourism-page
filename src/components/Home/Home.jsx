import React from "react";

// components
import Navigation from "../Navigation/Navigation";

// styles
import {
  SContainerHome,
  SGridHome,
  SLeftContainer,
  SCircleExplore,
  SRightContainer,
} from "./Home.styled";

const Home = () => {
  return (
    <SContainerHome
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
    >
      <Navigation />
      <SGridHome>
        <SLeftContainer>
          <h5 className="heading_five">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="heading_one">SPACE</h1>
          <p className="text paragraph_main">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </SLeftContainer>
        <SRightContainer>
          <SCircleExplore>
            <div className="hover_shadow"></div>
            <h2 className="heading_four">EXPLORE</h2>
          </SCircleExplore>
        </SRightContainer>
      </SGridHome>
    </SContainerHome>
  );
};

export default Home;
