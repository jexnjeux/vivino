import React from "react";
import styled from "styled-components";
import { GiWineGlass } from "react-icons/gi";

const Highlights = ({ detail }) => {
  const { highlight } = detail;
  return (
    <>
      {Object.keys(detail).length > 0 && (
        <Container>
          <Title>Highlights</Title>
          {highlight?.map((text, i) => {
            return (
              <Highlight key={i}>
                <Icon>
                  <GiWineGlass size="30" color="white" />
                </Icon>
                {text}
              </Highlight>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Highlights;

const Container = styled.div`
  ${({ theme }) => theme.flex(null, "center")}
  margin: 60px auto;
  width: 1216px;
`;
const Title = styled.div`
  margin-right: 100px;
  font-size: 28px;
  font-weight: bold;
`;
const Highlight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
  font-size: 18px;
`;

const Icon = styled.span`
  ${({ theme }) => theme.flex("center", "center")}
  width: 48px;
  height: 48px;
  margin: 3px 10px 0 5px;
  border-radius: 16px;
  background-color: purple;
  /* background-color: ${({ bgColor }) => bgColor}; */
`;
