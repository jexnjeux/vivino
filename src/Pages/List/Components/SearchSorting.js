import React, { useState } from "react";
import styled from "styled-components";
import { ItemBox, TitleBox, Title } from "../styles";
import { GRAPES, REGION, COUNTRY, STYLES } from "../textConstant";
import { btnRender } from "../utils";

const SearchSorting = () => {
  const [grapeList, setGrapeList] = useState(GRAPES);
  const [region, setRegionList] = useState(REGION);
  const [countryList, setCountryList] = useState(STYLES);
  const [stylesList, setStylesList] = useState(COUNTRY);

  const typeRender = (title, state, setState) => (
    <>
      <ItemBox>
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>
        <TypeBox>{btnRender(state, setState)}</TypeBox>
      </ItemBox>
      <ItemBox></ItemBox>
    </>
  );

  return (
    <div>
      {typeRender("GRAPES", grapeList, setGrapeList)}
      {typeRender("REGION", region, setRegionList)}
      {typeRender("STYLES", countryList, setCountryList)}
      {typeRender("COUNTRY", stylesList, setStylesList)}
    </div>
  );
};

export default SearchSorting;

const TypeBox = styled.div`
  ${({ theme }) => theme.flex("space-between")};
  flex-wrap: wrap;
  width: 400px;
  height: 136px;
  overflow: scroll;
  /* max-width: 400px; */
  /* height: 140px; */
`;
