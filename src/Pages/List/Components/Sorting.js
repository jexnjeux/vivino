import React, { useState } from "react";
import styled from "styled-components";
import SearchSorting from "./SearchSorting";
import { USER_RATING, WINE_TYPES, RATING_BOOL } from "../textConstant";
import { ItemBox, TitleBox, Title, TypeBtn } from "../styles";
import { starRating } from "../../../Components/tool/tool";
import { handlePlace } from "../utils";

const Sorting = () => {
  const [typeList, setTypeList] = useState(WINE_TYPES);
  const [bgBool, setBgBool] = useState(RATING_BOOL);

  const handleChecked = (key) => {
    setBgBool({
      "Rare & extraordinary": false,
      "Very good stuff": false,
      "Good stuff": false,
      Average: false,
      [key]: true,
    });
  };

  return (
    <div>
      <ItemBox>
        <TitleBox>
          <Title>Wine Types</Title>
          <Text>Select multiple</Text>
        </TitleBox>
        <TypeBox>
          {Object.keys(typeList).map((type, i) => {
            return (
              <TypeBtn
                key={i}
                fixWidth
                clicked={typeList[type]}
                onClick={() => handlePlace(type, typeList, setTypeList)}
              >
                {type}
              </TypeBtn>
            );
          })}
        </TypeBox>
      </ItemBox>
      <ItemBox>
        <TitleBox>
          <Title>Price Range</Title>
        </TitleBox>
        <Price>
          <Text>0</Text>
          <Text>500</Text>
        </Price>
        <RangeBox>
          <Range topBar />
          <Range />
        </RangeBox>
      </ItemBox>
      <ItemBox>
        <TitleBox>
          <Title>Vivino User Rating</Title>
        </TitleBox>
        <StarList>
          {USER_RATING.map(({ number, text }, i) => (
            <li key={i}>
              <CheckContainer>
                <CheckCircle
                  type="checkbox"
                  bgColor={bgBool[text]}
                  onClick={() => handleChecked(text)}
                />
              </CheckContainer>
              <StarBox>{starRating(number)}</StarBox>
              <StarText bold>{number.toFixed(1)}</StarText>
              <StarText>{text}</StarText>
            </li>
          ))}
        </StarList>
      </ItemBox>
      <SearchSorting />
    </div>
  );
};

export default Sorting;

const Text = styled.span`
  font-size: 13px;
  font-weight: 300;
`;

const TypeBox = styled.div`
  ${({ theme }) => theme.flex("space-between")};
  flex-wrap: wrap;
  height: 100px;
`;

const Price = styled.div`
  ${({ theme }) => theme.flex("space-between")};
`;

const RangeBox = styled.div`
  position: relative;
`;

const Range = styled.input.attrs(() => ({
  type: "range",
  step: 1,
  min: 0,
  max: 500,
}))`
  width: 100%;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
  outline: none;
`;

const StarList = styled.ul`
  ${({ theme }) => theme.flex("space-between", null, "column")};

  li {
    ${({ theme }) => theme.flex("space-between", "center")};
    width: 320px;
    margin-bottom: 4px;
  }
`;

const CheckContainer = styled.div`
  ${({ theme }) => theme.flex("center", "center")}
  width: 22px;
  height: 22px;
  border: 1px solid #bfbfbf;
  border-radius: 11px;
  cursor: pointer;
`;

const CheckCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ bgColor }) => (bgColor ? "#A41323" : "white")};
`;

const StarBox = styled.div`
  ${({ theme }) => theme.flex("space-around")};
  width: 80px;
`;

const StarText = styled.span`
  width: ${({ bold }) => (bold ? "22px" : "150px")};
  font-size: 13px;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ theme }) => theme.themeBlack};
`;
