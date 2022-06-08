import Navbar from "./Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import { css, ThemeContext } from "@emotion/react";
import { useState } from "react";
/** @jsxImportSource @emotion/react */
function App() {
  const styles = {
    content: css`
      max-width: 1000px;
      margin: 0 auto;
      padding-top: 60px;
    `,
  };
  const darkTheme = {
    primaryColor: "white",
    primaryBackgroundColor: "534F52",
    secondaryBackgroundColor: "white",
  };
  const lightTheme = {
    primaryColor: "black",
    primaryBackgroundColor: "#d7d2f3",
    secondaryBackgroundColor: "white",
  };
  const [lightDark, setLightDark] = useState(lightTheme);
  return (
    <div className="App">
      <ThemeContext.Provider
        value={{ lightDark, setLightDark, lightTheme, darkTheme }}
      >
        <Navbar />
        <div css={styles.content}>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
