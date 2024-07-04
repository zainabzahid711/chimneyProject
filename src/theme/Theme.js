import React from "react";
import { createTheme } from "@mui/material/styles";

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    custom: {
      sectionOne: "#ffffff", // White for light theme
      sectionTwo: "#f5f5f5", // Slightly different white for differentiation
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#270E1E",
      paper: "#270E1E",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    custom: {
      sectionOne: "#451E37", // Original dark color
      sectionTwo: "#6A375A", // Suggested dark color
    },
  },
});

export { lightTheme, darkTheme };
