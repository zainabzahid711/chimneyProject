import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme/Theme";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar toggleMode={toggleTheme} darkMode={isDarkMode} />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
