import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "./Context/themeContext";
/** @jsxImportSource @emotion/react */
const Navbar = () => {
  const themechanger = (theme) => {
    const theme = useContext(themeContext);
  };
  const styles = {
    navbar: css`
      & a {
        text-decoration: none;
        color: #ffde00;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #3b4cca;
        font-size: 44px;
        font-weight: bold;
      }
      & a:hover {
        color: red;
      }
      & div > a {
        margin-right: 20px;
        font-size: 40px;
      }
      & nav > a {
        max-width: 100px;
      }
      & .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }
      & .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      & .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      & input:checked + .slider {
        background-color: #012039;
      }
      & input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      & input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      & .slider.round {
        border-radius: 34px;
      }
      & .slider.round:before {
        border-radius: 50%;
      }
    `,
  };
  return (
    <nav css={styles.navbar}>
      <Link to="/home">Home</Link>
      <label className="switch">
        <input type="checkbox" onClick={themechanger} />
        <span className="slider round"></span>
      </label>
      <div>
        <Link to="home">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
