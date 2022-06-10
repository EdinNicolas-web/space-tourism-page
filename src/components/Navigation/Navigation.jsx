import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// styles
import {
  SNavigation,
  SDivider,
  SLeftSection,
  SLogo,
  SRightSection,
  SItemMenu,
} from "./Navigation.style";

// images
import Logo from "../../assets/shared/logo.svg";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectItem = (item) => {
    navigate(item);
  };

  return (
    <SNavigation>
      <SLeftSection>
        <SLogo src={Logo} />
        <SDivider />
      </SLeftSection>
      <SRightSection>
        <SItemMenu
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => handleSelectItem("/")}
        >
          <p className="nav_text bold">00</p>
          <p className="nav_text">HOME</p>
        </SItemMenu>
        <SItemMenu
          className={location.pathname === "/destination" ? "active" : ""}
          onClick={() => handleSelectItem("/destination")}
        >
          <p className="nav_text bold">01</p>
          <p className="nav_text">DESTINATION</p>
        </SItemMenu>
        <SItemMenu
          className={location.pathname === "/crew" ? "active" : ""}
          onClick={() => handleSelectItem("/crew")}
        >
          <p className="nav_text bold">02</p>
          <p className="nav_text">CREW</p>
        </SItemMenu>
        <SItemMenu
          className={location.pathname === "tech" ? "active" : ""}
          onClick={() => handleSelectItem("/tech")}
        >
          <p className="nav_text bold">03</p>
          <p className="nav_text">TECHNOLOGY</p>
        </SItemMenu>
      </SRightSection>
    </SNavigation>
  );
};

export default Navigation;
