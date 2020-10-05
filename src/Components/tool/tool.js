import styled from "styled-components";

export const GeneralBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-radius: 80px;
  border-style: outset;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
