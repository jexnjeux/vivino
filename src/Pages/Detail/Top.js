import React, { useState } from "react";
import styled from "styled-components";
import PurchaseBox from "./PurchaseBox";
import { starRating } from "../../Components/tool/tool";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import {
  RiVipCrown2Line,
  RiSeedlingLine,
  RiThumbUpLine,
  RiMusic2Line,
  RiMoneyEuroCircleLine,
} from "react-icons/ri";

const Top = ({ detail }) => {
  const {
    winery,
    year,
    wine_name,
    wine_type,
    nation,
    region,
    rating,
    ratings,
    editor_note,
    feature,
  } = detail;

  const [checked, setChecked] = useState(false);
  return (
    <>
      {Object.keys(detail).length > 0 && (
        <TopRow>
          <ProductDetail>
            <Img alt="wine" src="/Images/wineBottle.png" />
            <Table>
              <Title>
                <p>{winery}</p>
                <h1>
                  {wine_name} {year}
                </h1>
              </Title>
              <Location>
                <img alt="flag" src={FLAG[nation]} />
                <p>
                  {wine_type}
                  {wine_type === ("Conac" || "Soju") ? " from " : " wine from "}
                  <b>
                    {region} · {nation}
                  </b>
                </p>
              </Location>
              <RateWishlist>
                <Rating>{Number(rating).toFixed(1)}</Rating>
                <StarRating>
                  <StarBox>{starRating(Number(rating).toFixed(1))}</StarBox>
                  {ratings}rating
                </StarRating>
                <Wishlist onClick={() => setChecked(!checked)}>
                  {checked ? (
                    <MdBookmark
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  ) : (
                    <MdBookmarkBorder
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  )}
                  <WishTitle>
                    {checked ? "Wishlisted" : "Add to Wishlist"}
                  </WishTitle>
                </Wishlist>
              </RateWishlist>
              <EditorNote>
                <p>
                  <b>Editor's note:</b>
                  {editor_note}
                </p>
                <a href="#editorNote">Read full Editor's note</a>
              </EditorNote>
              <FeatureBox>
                <Feature>
                  <Icon bgColor={ICON_NAME[feature[2]]}>
                    {iconFunc(feature[2])}
                  </Icon>
                  <p>{feature}</p>
                </Feature>
              </FeatureBox>
            </Table>
            <PurchaseBox detail={detail} />
          </ProductDetail>
        </TopRow>
      )}
    </>
  );
};

export default Top;

const TopRow = styled.div`
  ${({ theme }) => theme.flex("center")}
  padding: 0 48px;
  background-color: #f7f3f0;
`;

const ProductDetail = styled.div`
  ${({ theme }) => theme.flex("center")}
  /* 추가 */
  align-items:flex-start;
  padding: 48px 0;
  width: 1216px;
`;

const Img = styled.img`
  padding: 0 16px;
  height: 500px;
`;

const Table = styled.div`
  ${({ theme }) => theme.flex(null, null, "column")}
  width: 50%;
`;

const Title = styled.div`
  padding: 0 16px;
  p {
    margin: 0 0 8px;
    font-size: 26px;
  }
  h1 {
    margin: 0 0 16px;
    font-weight: bold;
    font-size: 32px;
  }
`;

const Location = styled.div`
  ${({ theme }) => theme.flex(null, "center")}
  margin: 10px 16px;
  font-size: 18px;
  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  b {
    font-weight: bold;
  }
`;

const RateWishlist = styled.div`
  ${({ theme }) => theme.flex(null, "center")}
  margin: 30px 16px;
  padding-right: 30px;
`;

const Rating = styled.div`
  margin-right: 10px;
  font-size: 40px;
  font-weight: bold;
`;

const StarRating = styled.div`
  ${({ theme }) => theme.flex(null, null, "column")}
  font-size: 12px;
  line-height: 1.1;
`;

const Wishlist = styled.div`
  ${({ theme }) => theme.flex(null, "center")}
  margin-left: 30px;
  padding: 0 16px;
  font-size: 16px;
  cursor: pointer;
`;

const WishTitle = styled.div`
  padding-left: 5px;
`;

const EditorNote = styled.div`
  margin: 0 16px;
  font-size: 20px;
  line-height: 1.5;
  b {
    font-weight: bold;
  }
  a {
    padding-top: 8px;
    font-size: 14px;
    font-weight: bold;
  }
`;

const Feature = styled.span`
  ${({ theme }) => theme.flex(null, "center")}
  margin: 20px 16px;
  padding-right: 16px;
  height: 48px;
  border-radius: 44px;
  background-color: white;
  p {
    margin-left: 10px;
    line-height: 38px;
    font-size: 13px;
  }
`;

const FeatureBox = styled.div`
  display: flex;
`;

const Icon = styled.span`
  ${({ theme }) => theme.flex("center", "center")}
  width: 32px;
  height: 32px;
  margin-left: 5px;
  border-radius: 16px;
  background-color: ${({ bgColor }) => bgColor};
`;

const StarBox = styled.div``;

const FLAG = {
  France: "https://www.flaticon.com/svg/static/icons/svg/197/197560.svg",
  Italy: "https://www.flaticon.com/svg/static/icons/svg/197/197626.svg",
  Spain: "https://www.flaticon.com/svg/static/icons/svg/197/197593.svg",
  Chile: "https://www.flaticon.com/svg/static/icons/svg/197/197586.svg",
  Korea: "https://www.flaticon.com/svg/static/icons/svg/197/197582.svg",
};

const ICON_NAME = {
  e: "#F35A5A",
  p: "#F35AB4",
  t: "#5A88F3",
  i: "#3DDCA9",
  o: "#7CCA2F",
};

const iconFunc = (letter) => {
  let result;
  switch (letter) {
    case "e":
      result = <RiVipCrown2Line size="20" color="white" />;
      break;
    case "p":
      result = <RiSeedlingLine size="20" color="white" />;
      break;
    case "t":
      result = <RiThumbUpLine size="20" color="white" />;
      break;
    case "i":
      result = <RiMusic2Line size="20" color="white" />;
      break;
    case "o":
      result = <RiMoneyEuroCircleLine size="20" color="white" />;
      break;
    default:
      break;
  }
  return result;
};
