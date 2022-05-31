import { css } from "@emotion/react";
import Agent from "./Agent";
import useFetch from "./useFetch";

/** @jsxImportSource @emotion/react */
const Agents = () => {
  const listofegents = [
    "lugia",
    "charizard",
    "ho-oh",
    "zapdos",
    "articuno",
    "moltres",
  ];

  const styles = {
    agents: css`
      max-width: 600px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3%;
      margin-top: 80px;
    `,
  };

  return (
    <div css={styles.agents}>
      {listofegents.map((agent) => {
        return (
          <Agent
            API_URL={"https://pokeapi.co/api/v2/pokemon/" + agent}
            key={agent}
          />
        );
      })}
    </div>
  );
};

export default Agents;
