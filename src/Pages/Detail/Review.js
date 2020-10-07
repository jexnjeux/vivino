import React from "react";
import { starRating } from "../../Components/tool/tool";
import { RiThumbUpLine, RiThumbUpFill, RiChat3Line } from "react-icons/ri";
import styled from "styled-components";

const Review = () => {
  return (
    <Container>
      <Title>Community reviews</Title>
      <Menu>
        <ul>
          <li>Helpful</li>
          <li>Recent</li>
          <li>Friends</li>
          <li>You</li>
        </ul>
      </Menu>
      <ReviewCard>
        <ReviewInfo>
          <UserImg src="https://images.vivino.com/avatars/default_user_50x50.png" />
          <RatingInfo>
            <StarBox>{starRating(4.5, "#F0A300")}</StarBox>
            <UserName>Nicola garcon-fons</UserName>
            <ReviewDate>25 Feb 2020</ReviewDate>
          </RatingInfo>
        </ReviewInfo>
        <ReviewNote>
          <p>
            Sur un petit verre de dégustation, on a déjà l’impression de toucher
            les cieux... Un nez puissant, d’une richesse et d’une complexité
            aromatique sensationnelles. On s’attend à quelque-chose d’hyper
            massif en bouche et là, ô surprise, on a un jus totalement velouté,
            caressant, profond mais sans aucune accroche (alors qu’on est sur un
            bébé vin de 2017 !) et surtout terriblement long. Je pense qu’en fin
            de bouteille on est sur du 5/5...
          </p>
        </ReviewNote>
        <Icons>
          <RiThumbUpLine /> 6
          <RiChat3Line /> 1
        </Icons>
      </ReviewCard>
      <ReviewCard>
        <ReviewInfo>
          <UserImg src="https://images.vivino.com/avatars/default_user_50x50.png" />
          <RatingInfo>
            <StarBox>{starRating(4.5, "#F0A300")}</StarBox>
            <UserName>Nicola garcon-fons</UserName>
            <ReviewDate>25 Feb 2020</ReviewDate>
          </RatingInfo>
        </ReviewInfo>
        <ReviewNote>
          <p>
            Sur un petit verre de dégustation, on a déjà l’impression de toucher
            les cieux... Un nez puissant, d’une richesse et d’une complexité
            aromatique sensationnelles. On s’attend à quelque-chose d’hyper
            massif en bouche et là, ô surprise, on a un jus totalement velouté,
            caressant, profond mais sans aucune accroche (alors qu’on est sur un
            bébé vin de 2017 !) et surtout terriblement long. Je pense qu’en fin
            de bouteille on est sur du 5/5...
          </p>
        </ReviewNote>
        <Icons>
          <RiThumbUpLine /> 6
          <RiChat3Line /> 1
        </Icons>
      </ReviewCard>
      <ReviewCard>
        <ReviewInfo>
          <UserImg src="https://images.vivino.com/avatars/default_user_50x50.png" />
          <RatingInfo>
            <StarBox>{starRating(4.5, "#F0A300")}</StarBox>
            <UserName>Nicola garcon-fons</UserName>
            <ReviewDate>25 Feb 2020</ReviewDate>
          </RatingInfo>
        </ReviewInfo>
        <ReviewNote>
          <p>
            Sur un petit verre de dégustation, on a déjà l’impression de toucher
            les cieux... Un nez puissant, d’une richesse et d’une complexité
            aromatique sensationnelles. On s’attend à quelque-chose d’hyper
            massif en bouche et là, ô surprise, on a un jus totalement velouté,
            caressant, profond mais sans aucune accroche (alors qu’on est sur un
            bébé vin de 2017 !) et surtout terriblement long. Je pense qu’en fin
            de bouteille on est sur du 5/5...
          </p>
        </ReviewNote>
        <Icons>
          <RiThumbUpLine /> 6
          <RiChat3Line /> 1
        </Icons>
      </ReviewCard>
      <MoreButton>Show more reviews</MoreButton>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  margin: 0 auto;
  width: 1216px;
`;

const Title = styled.div`
  margin: 20px 0;
  font-size: 28px;
  font-weight: bold;
`;

const Menu = styled.div`
  list-style: none;
  li {
    display: inline-block;
    padding: 10px;
    color: #ba1628;
    border-bottom: 1px solid #eae0da;
  }
`;

const ReviewCard = styled.div`
  ${({ theme }) => theme.flex("center", null, "column")}
  background-color: white;
  padding: 24px 20px 8px;
  box-shadow: 0 0 6px #ebebeb;
  border-radius: 10px;
`;

const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  border-radius: 50%;
`;

const RatingInfo = styled.div`
  ${({ theme }) => theme.flex("center", null, "column")}
  margin: 0 8px;
  font-size: 13px;
`;

const StarBox = styled.div``;

const UserName = styled.div`
  margin: 4px 0;
  font-weight: bold;
`;

const ReviewDate = styled.div``;

const ReviewNote = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const Icons = styled.div`
  ${({ theme }) => theme.flex(null, "center")}
  align-self: flex-end;
`;

const MoreButton = styled.button`
  margin: 16px 0 24px;
  font-size: 16px;
  color: #ba1628;
`;
