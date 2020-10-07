import React from "react";
import styled from "styled-components";

const Editor = ({ detail }) => {
  const { editor_note, description } = Object.keys(detail) && detail;

  return (
    <Container>
      <EditorNote id="editorNote">
        <p>EDITOR NOTE</p>
        {editor_note}
      </EditorNote>
      {description?.map((text, i) => {
        return (
          <Propos key={i}>
            <p>{TITLE[i]}</p>
            {text}
          </Propos>
        );
      })}
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  ${({ theme }) => theme.flex("center", "center", "column")}
  margin: 30px auto 0 auto;

  padding: 32px 150px;
  width: 1216px;
  /* background-color: ${({ theme }) => theme.backgroundColor}; */
  background-color: #f7f3f0;
`;

const EditorNote = styled.div`
  margin: 8px 0;
  text-align: center;
  font-size: 42px;
  color: #6b3a0b;
  p {
    margin: 16px 0;
    font-size: 14px;
    color: #6b3a0b;
  }
`;
const Propos = styled.div`
  line-height: 1.3;
  text-align: center;
  font-size: 18px;
  p {
    margin: 17px 0;
    font-size: 26px;
    color: #6b3a0b;
  }
`;
const TITLE = [
  "Présentation du vin",
  "A propos du vin",
  "A propos du domaine",
  "A propos du vignoble",
];
