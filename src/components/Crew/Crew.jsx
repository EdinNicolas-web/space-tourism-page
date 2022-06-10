import React from "react";

// styles
import { SContainerCrew, SLayoutCrew } from "./Crew.style";

// components
import Navigation from "../Navigation/Navigation";

const Crew = () => {
  return (
    <SContainerCrew
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
      }}
    >
      <Navigation />
      <SLayoutCrew>
        <h5 className="heading_five">
          <span className="number">02</span>MEET YOUR CREW
        </h5>
      </SLayoutCrew>
    </SContainerCrew>
  );
};

export default Crew;
