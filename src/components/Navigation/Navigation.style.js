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
`;

export const SRightSection = styled.div`
  width: 830px;
  height: 96px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5px);
  z-index: 1;
`;
