import React, { useState } from "react";
import chimneyLogo from "../../assets/svg/ChimneyLogo.svg";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import light from "../../assets/svg/lightMode.svg";
import dark from "../../assets/svg/darkMode.svg";

//box is used for flexbox layout

const NavMain = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: 92,
  borderBottom: "1px solid #8B8B8B99",
}));

const NavContainer = styled(Box)(({ theme }) => ({
  width: 1100,
  height: 92,
  maxWidth: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 0px 24px 0px",
  [theme.breakpoints.down("lg")]: {
    width: 900,
  },
  [theme.breakpoints.down("md")]: {
    width: 700,
  },
  [theme.breakpoints.down("sm")]: {
    width: 300,
    padding: "12px 0px 12px 0px",
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 20,
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 44,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function NavBar({ darkMode, toggleMode }) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

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
          <MenuButton onClick={toggleDrawer(true)}>
            <Menu />
          </MenuButton>
        </NavContainer>
      </NavMain>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText primary="Frequently Asked Questions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Start Hoisting" />
            </ListItem>
            <ListItem onClick={toggleMode}>
              <img src={darkMode ? light : dark} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
