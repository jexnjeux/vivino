import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Sorting from "./Components/Sorting";
import ProductCard from "./Components/ProductCard";
import { SORTBOX_LIST } from "./textConstant";

const List = () => {
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortTitle, setSortTitle] = useState("Highest User Rating");
  const [fetchStr, setFetchStr] = useState("price");

  useEffect(() => {
    fetch(`http://10.58.0.59:8000/products?order=${fetchStr}`)
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  }, [fetchStr]);

  const sortFetch = (list) => {
    let resultStr;
    switch (list) {
      case "Highest User Rating":
        resultStr = "total_rating";
        break;
      case "Price: Low to High":
        resultStr = "price";
        break;
      case "Price: High to Low":
        resultStr = "-price";
        break;
      case "Popular":
        resultStr = "average_score";
        break;
      default:
        resultStr = "total_rating";
        break;
    }
    return setFetchStr(resultStr);
  };

  const handleSortList = (item) => {
    sortFetch(item);
    setSortTitle(item);
    setDisplay(!display);
  };

  const { count, result } = products;

  return (
    <Wrapper>
      <Container>
        <Title>{`Showing ${count} wines between ${"_sorting price~price_"} rated above ${"_start raiting_"} stars`}</Title>
        <SortContainer>
          <SortTitle onClick={() => setDisplay(!display)}>
            <SortText>Sort :</SortText>
            <SortText listItem>{sortTitle}</SortText>
            <SortText rotateOn>{`>`}</SortText>
          </SortTitle>
          <SortList displayOn={display}>
            {SORTBOX_LIST.map((item, i) => (
              <li key={i} onClick={() => handleSortList(item)}>
                {item}
              </li>
            ))}
          </SortList>
        </SortContainer>
        <ContentBox>
          <Sorting />
          <CardBox>
            {result?.map((el) => (
              <ProductCard key={el.id} products={el} />
            ))}
          </CardBox>
        </ContentBox>
      </Container>
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Container = styled.div`
  ${({ theme }) => theme.flex(null, null, "column")};
  width: 1216px;
  height: 100%;
`;

const Title = styled.h2`
  margin-top: 80px;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.themeBlack};
`;

const SortContainer = styled.div`
  ${({ theme }) => theme.flex("flex-end")};
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

const ContentBox = styled.div`
  ${({ theme }) => theme.flex("space-between")};
  margin-top: 16px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
`;
