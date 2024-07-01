// App.js
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { lightTheme, darkTheme } from "./theme/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ padding: 20 }}>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Dark Mode
        </Button>
        <h1>Hello, World!</h1>
        <p>This is a sample application to demonstrate dark mode.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
