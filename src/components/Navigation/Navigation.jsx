import React from "react";

// styles
import {
  SNavigation,
  SDivider,
  SLeftSection,
  SLogo,
  SRightSection,
} from "./Navigation.style";

// images
import Logo from "../../assets/shared/logo.svg";

const Navigation = () => {
  return (
    <SNavigation>
      <SLeftSection>
        <SLogo src={Logo} />
        <SDivider />
      </SLeftSection>
      <SRightSection>
          
      </SRightSection>
    </SNavigation>
  );
};

export default Navigation;
