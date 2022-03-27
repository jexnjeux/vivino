import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '../../Components/Slider/Slider';
import { Btn } from '../../Components/tool/tool';

const Main = () => {
  const shuffleList = (products) => {
    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]];
    }
    return products;
  };

  const [products, getProducts] = useState([]);

  const toplist = products.filter(({ rating }) => rating > 4);
  const related = shuffleList(products);
  const editors = products.filter(({ editor_note }) => editor_note !== null);
  const bestseller = products.filter(({ ratings }) => ratings > 100);
  const affordable = products.filter(({ price }) => price < 25);

  // useEffect(() => {
  //   getList();
  // }, []);

  // const getList = () => {
  //   fetch("http://10.58.5.243:8000/products")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       getProducts(res.products.result);
  //     });
  // }

  return (
    <MainWrap>
      {console.log(products)}
      <MainBannerWrap>
        <MainBanner />
      </MainBannerWrap>
      <ListWrap>
        <HeadWrap>
          <Header>Top lists in France</Header>
          <Subhead>Updated every Thursday</Subhead>
        </HeadWrap>
      </ListWrap>
      <BottomListWrap>
        <BtnWrap>
          <SortingBtnOne />
          <SortingBtnTwo />
          <SortingBtnThree />
          <SortingBtnFour />
        </BtnWrap>
        <BottomText>Best wines under €15 right now</BottomText>
      </BottomListWrap>
      <CompSlider>
        <Slider products={toplist} />
      </CompSlider>
      <Banner>Banner</Banner>
      <HeadWrap>
        <Header>Related to the wines you've viewed</Header>
      </HeadWrap>
      <CompSlider>
        <Slider products={related} />
      </CompSlider>
      <HeadWrap>
        <Header>Paldovivino Offers</Header>
        <Subhead>
          I'm Lee Heung Soo, Wine Editor at Vivino. Our communit of 34 users at
          Wecode let me create the best offers for high quality wines.
        </Subhead>
      </HeadWrap>
      <CompSlider>
        <Slider products={editors} />
      </CompSlider>
      <Banner>Banner</Banner>
      <HeadWrap>
        <Header>Bestsellers in France</Header>
        <Subhead>Top-selling wines in France right now.</Subhead>
      </HeadWrap>
      <CompSlider>
        <Slider products={bestseller} />
      </CompSlider>
      <BodyWrap>
        <HeadWrap>
          <Header>Affordable reds</Header>
          <Subhead>Great wines at great prices</Subhead>
        </HeadWrap>
        <CompSlider>
          <Slider products={affordable} />
        </CompSlider>
      </BodyWrap>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  height: auto;
  ${({ theme }) => theme.flex('center', 'center', 'column')};
`;

const MainBannerWrap = styled.div`
  width: auto;
  height: auto;
  ${({ theme }) => theme.flex('center', 'center', 'row')};
`;

const MainBanner = styled.div`
  width: 1519px;
  height: 300px;
  background-image: url('https://www.vivino.com/misc/bazooka/Rioja_2020/web/desktop_FR.jpg');
  background-position: center;
  background-size: cover;
`;

const BodyWrap = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 64px;
`;

const ListWrap = styled.div`
  width: 1216px;
  height: auto;
  margin: 0 auto;
`;

const HeadWrap = styled.div`
  margin: 64px 0 24px 0;
  max-width: 1216px;
  width: 100%;
`;

const Header = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 24px;
`;

const Subhead = styled.div`
  color: gray;
  font-size: 20px;
  font-weight: light;
  margin-bottom: 24px;
`;

const CompSlider = styled.div`
  margin: 24px 0;
  width: 1232px;
  height: auto;
  line-height: 534px;
  ${({ theme }) => theme.flex('center', 'center', 'row')}
`;

const BottomListWrap = styled.div``;

const BtnWrap = styled.div`
  width: 1216px;
  ${({ theme }) => theme.flex('flex-start', 'center', 'row')}
`;

const SortingBtnOne = styled(Btn)`
  width: 70px;
  height: 30px;
  background-color: #a31323;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #a31323;
  color: #ffffff;
  margin: 0 8px 8px 0;
  background-image: url('/images/coin1.svg');
  background-size: 20px 16px;
`;

const SortingBtnTwo = styled(SortingBtnOne)`
  background-color: #ffffff;
  background-image: url('/images/coin2.svg');
`;

const SortingBtnThree = styled(SortingBtnOne)`
  background-color: #ffffff;
  background-image: url('/images/coin3.svg');
`;

const SortingBtnFour = styled(SortingBtnOne)`
  background-color: #ffffff;
  background-image: url('/images/coin4.svg');
`;

const BottomText = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.53846;
`;

const Banner = styled.div`
  width: 100%;
  max-width: 1216px;
  height: 284px;
  margin: 56px 0 16px 0;
  border: solid 1px red;
  text-align: center;
  line-height: 284px;
`;
