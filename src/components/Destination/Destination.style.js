import styled from "styled-components";

// background
import BackgroundDesktop from "../../assets/destination/background-destination-desktop.jpg";

//motion
import { motion } from "framer-motion";

export const SContainerDestination = styled(motion.section)`
  background-image: url(${BackgroundDesktop});
  width: 100%;
  height: 100vh;
`;

export const SLayoutDestination = styled.div`
  padding: 40px 100px;
  .number {
    margin-right: 25px;
    font-weight: 700;
    opacity: 0.25;
  }
  .heading_five {
    color: var(--white);
  }
`;

export const SGridDestination = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px;
  .container_right {
    width: 445px;
  }
`;

export const SRightSection = styled.div`
  display: flex;
  gap: 60px;
`;

export const SItemPlanet = styled.div`
  height: 40px;
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
  transition: all ease-in 0.2s;
  cursor: pointer;
  .body_text {
    color: var(--secondary);
  }
`;

export const SDivider = styled.hr`
  height: 2px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  opacity: 0.25;
  margin-top: 35px;
  margin-bottom: 20px;
`;
export const SDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25%;
  .sub_heading_two {
    color: var(--secondary);
  }
`;
