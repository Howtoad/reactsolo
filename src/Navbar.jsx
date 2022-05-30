import { Link } from "react-router-dom";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
const Navbar = () => {
  const styles = {
    navbar: css`
      max-width: 90px;
      margin: 0 auto;
      & a {
        text-decoration: none;
        color: #ffde00;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #3b4cca;
      }
      & a:hover {
        color: red;
      }
      & div > a {
        margin-right: 20px;
      }
      & nav > a {
        max-width: 100px;
      }
    `,
  };
  return (
    <nav css={styles.navbar}>
      <Link to="/home">
        <h2>Home</h2>
      </Link>
      <div>
        <Link to="home">About</Link>
        <Link to="create">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
