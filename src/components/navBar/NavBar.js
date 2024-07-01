import React from "react";
import chimneyLogo from "../../assets/svg/ChimneyLogo.svg";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import light from "../../assets/svg/lightMode.svg";
import dark from "../../assets/svg/darkMode.svg";

//box is used for flexbox layout

const NavMain = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  maxWidth: 1400,
  width: "100%",
  height: 92,
  borderBottom: "1px solid #8B8B8B99",
}));

const NavContainer = styled(Box)({
  width: 1100,
  height: 92,
  maxWidth: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 0px 24px 0px",
});

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NavLinks = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 44,
  cursor: "pointer",
});

function NavBar({ darkMode, toggleMode }) {
  return (
    <>
      <NavMain>
        <NavContainer>
          <LogoContainer>
            <img
              src={chimneyLogo}
              alt="chimneyLogo"
              style={{
                width: 25,
                height: 25,
                marginRight: 5,
              }}
            />
            <Typography variant="h5" component="h5" style={{ fontWeight: 700 }}>
              chimney
            </Typography>
          </LogoContainer>
          <NavLinks>
            <Typography
              variant="body1"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Login
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Start Hoisting
            </Typography>
            <img onClick={toggleMode} src={darkMode ? light : dark} />
          </NavLinks>
        </NavContainer>
      </NavMain>
    </>
  );
}

export default NavBar;
