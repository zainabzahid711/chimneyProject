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
      sectionOne: "#f0f0f0", //latest creations section
      sectionTwo: "#f8f8f8", //storagetowork section
      sectionEarningGrowth: "#f0f0f5", //earning growth section
      DecentralizationSec: "#f7f7fa", //decentrilzation section
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
      sectionOne: "#451E37", // latest creations section
      sectionTwo: "#6A375A", // storage to work section
      sectionEarningGrowth: "#400A27", //earning growth section
      DecentralizationSec: "#5C2A4A", //decentrilzation section
    },
  },
});

export { lightTheme, darkTheme };
