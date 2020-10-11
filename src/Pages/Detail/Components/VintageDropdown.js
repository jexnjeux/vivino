import React, { useState } from "react";
import styled, { css } from "styled-components";

const VintageDropdown = ({
  vintageSort,
  setVintageSort,
  detail,
  setDetail,
}) => {
  const [display, setDisplay] = useState(false);
  const handleSortList = (item) => {
    setVintageSort(item);
    setDisplay(!display);
    test();
  };

  const test = () => {
    // detail.vintages - year
    const temp = detail.vintages.reverse();

    console.log(temp.sort());
    // setDetail({ ...detail });
  };
  return (
    <SortContainer>
      <SortTitle onClick={() => setDisplay(!display)}>
        <SortText listItem>{vintageSort}</SortText>
        <SortText rotateOn>{`>`}</SortText>
      </SortTitle>
      <SortList displayOn={display}>
        {options.map((item, i) => (
          <li key={i} onClick={() => handleSortList(item)}>
            {item}
          </li>
        ))}
      </SortList>
    </SortContainer>
  );
};

export default VintageDropdown;

const SortContainer = styled.div`
  display: flex;
  height: 40px;
  margin-top: 16px;
  position: relative;
`;

const sortStyle = () => css`
  width: 200px;
  font-size: 14px;
  color: #484848;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const SortTitle = styled.div`
  ${sortStyle}
  ${({ theme }) => theme.flex("space-around", "center")};
  height: 100%;
  cursor: pointer;
`;

const SortText = styled.span`
  display: inline-block;
  width: ${({ listItem }) => listItem && "123px"};
  transform: ${({ rotateOn }) => (rotateOn ? "rotate(90deg)" : "")};
`;

const SortList = styled.ul`
  ${sortStyle}
  display: ${({ displayOn }) => (displayOn ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  padding: 20px 16px;
  position: absolute;
  top: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  li {
    display: flex;
    align-items: center;
    height: 24px;
    cursor: pointer;

    :hover {
      background-color: #f3f3f3;
    }
  }
`;

const options = [
  "Year",
  "Most popular",
  "Highest user rating",
  "Lowest price first",
  "Lowest price first",
  "Highest price first",
];
