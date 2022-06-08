import { css } from "@emotion/react";
import useFetch from "./useFetch";
import themeContext from "./Context/themeContext";
import { useContext } from "react";
/** @jsxImportSource @emotion/react */

const Agent = (props) => {
  const { lightDark } = useContext(themeContext);
  const styles = {
    agent: css`
      background-color: ${lightDark && lightDark.secondaryColor};
      border-radius: 50%;
      height: 188px;
      display: grid;
      & img {
        align-self: center;
        justify-self: center;
        width: 60%;
      }
      & img:hover {
        cursor: pointer;
      }
    `,
  };
  const handleClick = () => {
    alert(data.name);
  };
  const { data, pending, error } = useFetch(props.API_URL);
  return (
    <div css={styles.agent}>
      {error && <div>{error.message}</div>}
      <img
        onClick={handleClick}
        src={(!pending && data.sprites.front_default) || "xD"}
        alt={(!pending && data.name) || "xD"}
      ></img>
    </div>
  );
};

export default Agent;
