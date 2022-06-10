import styled from "styled-components";

export const SNavigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

export const SLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const SLogo = styled.img`
  margin-right: 30px;
`;

export const SDivider = styled.hr`
  width: 475px;
  background-color: var(--white);
  height: 1px;
  opacity: 0.25;
  z-index: 10;
  position: absolute;
  left: 100%;
`;

export const SRightSection = styled.div`
  width: 830px;
  height: 96px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5px);
  z-index: 1;
  display: flex;
  .active {
    border-bottom: 3px solid white;
  }
  display: flex;
  justify-content: center;
`;

export const SItemMenu = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 5px;
  transition: all ease 0.2s;
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  }
`;
