import styled from "styled-components";

import BackgroundDesktop from "../../assets/home/background-home-desktop.jpg";

// motion
import { motion } from "framer-motion";

export const SContainerHome = styled(motion.main)`
  background-image: url(${BackgroundDesktop});
  width: 100%;
  height: 100vh;
`;

export const SGridHome = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
  padding: 100px;
`;

export const SLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  .paragraph_main {
    width: 444px;
  }
`;

export const SRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const SCircleExplore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 274px;
  margin-right: 40px;
  height: 274px;
  background-color: var(--white);
  padding: 10px;
  position: relative;
  cursor: pointer;

  .heading_four {
    color: var(--black);
  }
  .hover_shadow {
    position: absolute;
    border-radius: 50%;
    width: 274px;
    height: 274px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all ease 0.5s;
    &:hover {
      width: 374px;
      height: 374px;
    }
  }
`;
