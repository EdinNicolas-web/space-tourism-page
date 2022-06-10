import React from "react";

// styles
import {
  SContainerDestination,
  SLayoutDestination,
  SGridDestination,
  SRightSection,
  SItemPlanet,
  SDivider,
  SDescriptionContainer,
} from "./Destination.style";

// components
import Navigation from "../Navigation/Navigation";

//images
import MoonImage from "../../assets/destination/image-moon.png";

const Destination = () => {
  return (
    <SContainerDestination
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
      <SLayoutDestination>
        <h5 className="heading_five">
          <span className="number">01</span>PICK YOUR DESTINATION
        </h5>
        <SGridDestination>
          <img src={MoonImage} />
          <div className="container_right">
            <SRightSection>
              <SItemPlanet>
                <p className="body_text">MOON</p>
              </SItemPlanet>
              <SItemPlanet>
                <p className="body_text">MARS</p>
              </SItemPlanet>
              <SItemPlanet>
                <p className="body_text">EUROPA</p>
              </SItemPlanet>
              <SItemPlanet>
                <p className="body_text">TITAN</p>
              </SItemPlanet>
            </SRightSection>
            <h2 className="heading_two">MOON</h2>
            <p className="body_text">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <SDivider />
            <SDescriptionContainer>
              <div>
                <h6 className="sub_heading_two">AVG. DISTANCE</h6>
                <p className="sub_heading_one">384,400 KM</p>
              </div>
              <div>
                <h6 className="sub_heading_two">EST. TRAVEL TIME</h6>
                <p className="sub_heading_one">3 DAYS</p>
              </div>
            </SDescriptionContainer>
          </div>
        </SGridDestination>
      </SLayoutDestination>
    </SContainerDestination>
  );
};

export default Destination;
