import { Link } from "react-router-dom";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
const Navbar = () => {
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
    `,
  };
  return (
    <nav css={styles.navbar}>
      <Link to="/home">Home</Link>
      <div>
        <Link to="home">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
