import { css } from "@emotion/react";
import Agent from "./Agent";

/** @jsxImportSource @emotion/react */
const Agents = () => {
  const listofegents = [
    "lugia",
    "mew",
    "sandshrew",
    "gengar",
    "haunter",
    "farfetchd",
  ];

  const styles = {
    agents: css`
      max-width: 930px;
      margin: 0 auto;
    `,
  };

  return (
    <>
      {listofegents.map((agent) => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + agent)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        return <Agent />;
      })}
    </>
  );
};

export default Agents;
