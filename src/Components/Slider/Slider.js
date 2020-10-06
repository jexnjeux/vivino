import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "../tool/tool";
import {starRating} from "../tool/tool"

const Slider = ({products}) => {
  const [x, setX] = useState(0);
  const [count, setCount] = useState(6);
  const [index, setIndex] = useState(0);
  
  const goLeft = () => {
    console.log(x);
    x === 0 ? setX(-535 * (products.length - 1)) : setX(x + 535);
  };

  const goRight = () => {
    console.log(x);
    x === -535 * (products.length - 1) ? setX(0) : setX(x - 535);
  };

  return (
    <RelativeWrap>
      <SliderWrap>
        {products.map((product, index) => {
          return <Slide key={index} style={{transform: `translateX(${x}%)`}}>
            <SlideTop>
              <TopLeft>
                <Score>
                  {product.rating.toFixed(1)}
                </Score>
                <Star>
                  {starRating(product.rating)}
                </Star>
                <RatingCtn>
                  {product.ratings} ratings
                </RatingCtn>
              </TopLeft>
              <TopRight>
                <WineImg alt={product.wine_name} src={product.image_url}></WineImg>
              </TopRight>
            </SlideTop>
            <SlideMid>
              <TitleWrap>
                <Winery>{product.winery}</Winery>
                <WineName>
                {product.wine_name}
                </WineName>
              </TitleWrap>
              <DescriptionWrap>
                <Flag><img alt="" src="#"></img></Flag>
                <WineType>Rosé wine </WineType>
                from
                <Region> {product.region}</Region> - 
                <Country>{product.nation}</Country>
              </DescriptionWrap>
            </SlideMid>
            <SlideBottom>
              <Price>€{Number(product.price).toLocaleString()}</Price>
              <CounterWrap>
                <Counter>
                  <Minus onClick={()=>setCount(count - 1)}>-</Minus>
                  <Count>{count}</Count>
                  <Plus onClick={()=>setCount(count + 1)}>+</Plus>
                </Counter>
                <AddCartBtn/>
              </CounterWrap>
            </SlideBottom>
          </Slide>;
        })}
        {x === 0 || <ButtonLeft onClick={goLeft}>left</ButtonLeft>}
        {x === -1070 || <ButtonRight onClick={goRight}>right</ButtonRight>}
      </SliderWrap>
    </RelativeWrap>
  );
};

export default Slider;

const RelativeWrap = styled.main`
  position: relative;
`;

const SliderWrap = styled.div`
  width: 1232px;
  height: 560px;
  margin: 0;
  overflow: hidden;
  ${({ theme }) => theme.flex("flex-start", "center", "row")}
`;

const Slide = styled.div`
  min-width: 19%;
  width: 100%;
  height: 100%; 
  transition: .5s;
  border-radius: 4px;
  margin-right: 16px;
  background-color:#fafafa;
  ${({theme}) => theme.flex("flex-start", "center", "column")}
`;

const SlideTop = styled.div`
  line-height: 100%;
  width: 100%;
  flex: 1;
  padding: 0 24px;
  background-color: #f7f3f0;
  ${({theme})=>theme.flex("center", "center", "row")}
`;

const TopLeft = styled.div`
  height: 100%;
  flex: 1;
  ${({theme})=> theme.flex("center", "flex-start", "column")};
  `;

const Score = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 100%;
`;

const Star = styled.div`
  width: 80px;
  height: 14px;
`;

const RatingCtn = styled.div`
margin-top: 8px;
font-size: 14px;
font-weight: 300;
color: #989999;
`;

const TopRight = styled.div`
  height: 100%;
  flex: 1;
  `;

const WineImg = styled.div`
  background: url("/images/testwine.png") no-repeat 100% 100%;
  background-size: contain;
  height: 100%;
  margin-top: 16px;
`;

const SlideMid = styled.div`
  line-height: 100%;
  height: 91.2px;
  width: 100%;
  margin-top: 16px;
  padding: 16px 16px 0;
`;

const TitleWrap = styled.div``;

const Winery = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;`;

const WineName = styled.div`
    font-size: 14px;
    font-weight: 900;
    text-overflow: ellipsis;
    overflow: hidden;`;

const DescriptionWrap = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 300;
`;

const Flag = styled.span`
`;

const WineType= styled.span`
  font-size: 12px;
  font-weight: 300;
`;
const Region = styled.span`
  color: #1e1e1e;
  font-size: 12px;
  font-weight: 400;
`;
const Country = styled.span`

`;


const SlideBottom = styled.div`
  line-height: 100%;
  padding: 16px;
  height: 112px;
  width: 100%;
`;

const Price = styled.div`
  font-size: 20px;
  line-height: normal;
  font-weight: 900;
  margin-top: 8px;
`;

const CounterWrap = styled.div`
  margin-top: 8px;
  ${({theme}) => theme.flex("space-between", "center", "row")}
`;

const Counter = styled.div`
  border: solid 1px #e4e4e4;
  flex-basis: 60%;
  height: 40px;
  font-size: 13px;
  line-height: 1.53846;
  color: #111;
  border-radius: 4px;
  ${({theme}) => theme.flex("center", "center", "row")}
`;

const Minus = styled.div`
  font-size: 24px;
  font-weight: 300;
  max-width: 40px;
  flex: 1;
  text-align: center;
  cursor: pointer;
  border-right: solid 1px #e4e4e4;
`;

const Count = styled.div`
  font-size: 14px;
  font-weight: 400;
  flex: 1;
  text-align: center;
`;

const Plus = styled.div`
  font-size: 24px;
  font-weight: 300;
  max-width: 40px;
  flex: 1;
  text-align: center;
  cursor: pointer;
  border-left: solid 1px #e4e4e4;
`;

const AddCartBtn = styled(Btn)`
  width: 82px;
  height: 40px;
  background-color: #02a78b;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #02a78b;
  color: #ffffff;
  background-image: url("/images/coin1.svg");
  background-size: 20px 16px;
  flex-basis: 30%;
`;

const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: -38px;
  transform: translateY(-200%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 20px 0 rgba(66,66,66,.2);
  cursor: pointer;
  z-index: 10000;
`;

const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: -38px;
  transform: translateY(-200%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 20px 0 rgba(66,66,66,.2);
  cursor: pointer;
  z-index: 10000;
`;
