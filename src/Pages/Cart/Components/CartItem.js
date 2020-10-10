import React from "react";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Btn } from "../../../Components/tool/tool";

const CartItem = ({ cartList }) => {
  return (
    <>
      <ItemBox>
        {cartList.length &&
          cartList.map((item, i) => (
            <Item key={item.id} idx={i === cartList.length - 1 ? true : false}>
              <ImgBox>
                <Img />
              </ImgBox>
              <TextBox>
                <Text>{item.winery}</Text>
                <Bold>{item.wine_name}</Bold>
                <Bold>{item.year}</Bold>
              </TextBox>
              <QuantityBox>
                <ChangeQuantityBox>
                  <Bold big>-</Bold>
                  <Bold>6 bottles</Bold>
                  <Bold big>+</Bold>
                </ChangeQuantityBox>
                <Icon>
                  <RiDeleteBin6Line />
                </Icon>
              </QuantityBox>
              <PriceBox>
                <Bold>{`€${item.price}`}</Bold>
                <Text>{`€${item.price * 6}`}</Text>
              </PriceBox>
            </Item>
          ))}
      </ItemBox>
      <CheckoutBox>
        <CheckoutList>
          <CheckoutItem>
            <Text>Subtotal</Text>
            <Text>€3000</Text>
          </CheckoutItem>
          <CheckoutItem>
            <Text>Tax</Text>
            <Text>Included</Text>
          </CheckoutItem>
          <CheckoutItem>
            <Text>Shipping</Text>
            <Text>€12</Text>
          </CheckoutItem>
          <CheckoutItem last>
            <Bold>Total</Bold>
            <Bold>€3012</Bold>
          </CheckoutItem>
        </CheckoutList>
      </CheckoutBox>
      <BtnBox>
        <CheckoutBtn>Checkout</CheckoutBtn>
      </BtnBox>
    </>
  );
};

export default CartItem;

const Text = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.themeBlack};
  margin-left: 4px;
  font-weight: 300;
  cursor: ${({ big }) => (big ? "pointer" : "default")};
`;

const Bold = styled(Text)`
  font-weight: ${({ big }) => (big ? "" : "400")};
  font-size: ${({ big }) => (big ? "26px" : "")};
`;

const ItemBox = styled.div`
  padding: 6px 30px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 8px #d6d6d6;
  margin-bottom: 20px;
`;

const Item = styled.div`
  ${({ theme }) => theme.flex(null, "center")};
  height: 80px;
  border-bottom: ${({ idx }) => (idx ? "" : "1px solid #D6D6D6")};
`;

const ImgBox = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  width: 60px;
  height: 60px;
`;

const Img = styled.img.attrs(() => ({
  src: "http://images.vivino.com/thumbs/TGdart4zRQGI70hl9nnjTw_pb_x300.png",
}))`
  width: 15px;
  height: 54px;
`;

const TextBox = styled.div`
  width: 580px;
`;

const QuantityBox = styled.div`
  ${({ theme }) => theme.flex("space-between", "center")};
  width: 240px;
  height: 40px;
`;

const ChangeQuantityBox = styled.div`
  ${({ theme }) => theme.flex("space-around", "center")};
  width: 200px;
  height: 100%;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
`;

const PriceBox = styled.div`
  ${({ theme }) => theme.flex("space-between", "center")};
  margin-left: 60px;
  width: 220px;
`;

const Icon = styled.span`
  cursor: pointer;
`;

const CheckoutBox = styled.div`
  ${({ theme }) => theme.flex("flex-end")};
  padding: 0 30px;
  margin-bottom: 20px;
`;

const CheckoutList = styled.ul`
  width: 380px;
`;

const CheckoutItem = styled.li`
  ${({ theme }) => theme.flex("space-between", "center")};
  height: 44px;
  border-bottom: ${({ last }) => (last ? "" : "1px solid #D6D6D6")};
`;

const BtnBox = styled.div`
  ${({ theme }) => theme.flex("flex-end")}
`;

const CheckoutBtn = styled(Btn)`
  width: 240px;
  height: 40px;
  background-color: #02a78b;
  font-size: 18px;
  color: white;

  :hover {
    background-color: #008d75;
  }
`;
