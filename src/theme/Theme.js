import React from "react";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

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
  },
});

export { lightTheme, darkTheme };
