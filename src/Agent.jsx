import { css } from "@emotion/react";
import useFetch from "./useFetch";
/** @jsxImportSource @emotion/react */

const Agent = (props) => {
  const styles = {
    agent: css`
      background-color: #3b4cca;
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
  const { data, pending, error } = useFetch(props.API_URL);
  return (
    <div css={styles.agent}>
      {error && <div>{error.message}</div>}
      <img
        src={(!pending && data.sprites.front_default) || "xD"}
        alt={(!pending && data.name) || "xD"}
      ></img>
    </div>
  );
};

export default Agent;
