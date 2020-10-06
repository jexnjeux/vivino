import React from "react";
import { TypeBtn } from "./styles";

export const handlePlace = (title, state, setState) => {
  setState({
    ...state,
    [title]: !state[title],
  });
};

export const btnRender = (state, setState) => (
  <>
    {Object.keys(state)
      .filter((key) => state[key] !== false)
      .map((item, i) => (
        <TypeBtn
          key={i}
          onClick={() => handlePlace(item, state, setState)}
          clicked={state[item]}
        >
          {item}
        </TypeBtn>
      ))}
    {Object.keys(state)
      .filter((key) => state[key] === false)
      .map((item, i) => (
        <TypeBtn
          key={i}
          onClick={() => handlePlace(item, state, setState)}
          clicked={state[item]}
        >
          {item}
        </TypeBtn>
      ))}
  </>
);
