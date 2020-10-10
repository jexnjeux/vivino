import React from "react";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Btn } from "../../../Components/tool/tool";

const CartItem = ({ cartList, handleQuantity, handleDelete }) => {
  const sumPrice = () => {
    let result = 0;
    Object.values(cartList).forEach(
      ({ price, quantity }) => (result = result + Number(price * quantity))
    );
    return result;
  };

  const shippingPrice = sumPrice() >= 250;

  return (
    <>
      {Object.values(cartList).length ? (
        <>
          <ItemBox>
            {Object.values(cartList).map(
              (
                { id, image_url, winery, wine_name, year, quantity, price },
                i
              ) => (
                <Item key={id} idx={i === Object.values(cartList).length - 1}>
                  <ImgBox>
                    <Img imageUrl={image_url} />
                  </ImgBox>
                  <TextBox>
                    <Text>{winery}</Text>
                    <Bold>{wine_name}</Bold>
                    <Bold>{year}</Bold>
                  </TextBox>
                  <QuantityBox>
                    <ChangeQuantityBox>
                      <Bold
                        big
                        disabled={cartList[id].quantity === 1}
                        onClick={() => handleQuantity(id, quantity)}
                      >
                        -
                      </Bold>
                      <Bold>{quantity} bottles</Bold>
                      <Bold
                        big
                        onClick={() => handleQuantity(id, quantity, "plus")}
                      >
                        +
                      </Bold>
                    </ChangeQuantityBox>
                    <Icon onClick={() => handleDelete(id)}>
                      <RiDeleteBin6Line />
                    </Icon>
                  </QuantityBox>
                  <PriceBox>
                    <Bold>{`€${price}`}</Bold>
                    <Text>{`€${price * quantity}`}</Text>
                  </PriceBox>
                </Item>
              )
            )}
          </ItemBox>
          <CheckoutBox>
            <CheckoutList>
              <CheckoutItem>
                <Text>Subtotal</Text>
                <Text>€{sumPrice()}</Text>
              </CheckoutItem>
              <CheckoutItem>
                <Text>Tax</Text>
                <Text>Included</Text>
              </CheckoutItem>
              <CheckoutItem>
                <Text>Shipping</Text>
                <Text>{shippingPrice ? `Free Shipping` : `€12`}</Text>
              </CheckoutItem>
              <CheckoutItem last>
                <Bold>Total</Bold>
                <Bold>€{shippingPrice ? sumPrice() : sumPrice() + 12}</Bold>
              </CheckoutItem>
            </CheckoutList>
          </CheckoutBox>
          <BtnBox>
            <CheckoutBtn>Checkout</CheckoutBtn>
          </BtnBox>
        </>
      ) : (
        <NoCart>
          <Bold>장바구니가 비었습니다.</Bold>
        </NoCart>
      )}
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
  pointer-events: ${({ disabled }) => (disabled ? "none" : "")};
  color: ${({ disabled }) => (disabled ? "#D0D0D0" : "")};
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
  border-bottom: ${({ idx }) => (idx ? "" : "1px solid #EAEAEA")};
`;

const ImgBox = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  width: 60px;
  height: 60px;
`;

const Img = styled.img.attrs(({ imageUrl }) => ({
  src: imageUrl,
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
  width: 260px;
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

const NoCart = styled.div`
  ${({ theme }) => theme.flex("center", "center")}
  height:200px;
  background-color: white;
`;
