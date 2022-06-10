import styled from "styled-components";

// background
import BackgroundDesktop from "../../assets/crew/background-crew-desktop.jpg";

//motion
import { motion } from "framer-motion";

export const SContainerCrew = styled(motion.section)`
  background-image: url(${BackgroundDesktop});
  width: 100%;
  height: 100vh;
`;

export const SLayoutCrew = styled.div`
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
