import Navbar from "./Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
function App() {
  const styles = {
    content: css`
      max-width: 1000px;
      margin: 0 auto;
      padding-top: 60px;
    `,
  };
  return (
    <div className="App">
      <Navbar />
      <div css={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
