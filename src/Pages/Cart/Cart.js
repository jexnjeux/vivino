import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./Components/CartItem";
import { TITLE_TEXT } from "./textConstant";

const Cart = () => {
  const [cartList, setCartList] = useState({});
  useEffect(() => {
    fetch("/Data/mock.json")
      .then((res) => res.json())
      .then((result) => setCartList(result.product_list));
  }, []);

  return (
    <Wrapper>
      <Container>
        <TitleBox>
          {TITLE_TEXT.map((text, i) => (
            <Title key={i} idx={i}>
              {text}
            </Title>
          ))}
        </TitleBox>
        <CartItem cartList={cartList} />
      </Container>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  background-color: #f7f3f0;
`;

const Container = styled.div`
  ${({ theme }) => theme.flex(null, null, "column")};
  width: 1216px;
  margin: 44px 0;
`;

const TitleBox = styled.div`
  ${({ theme }) => theme.flex("space-between", "center")}
  height: 15px;
  margin-bottom: 10px;
  padding: 0 30px;
`;

const Title = styled.span`
  display: inline-block;
  width: ${({ idx }) => (idx === 0 ? "576px" : "")};
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.themeBlack};
`;
