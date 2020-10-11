import React, { useState } from "react";
import styled from "styled-components";
import { starRating } from "../../../Components/tool/tool";
import { RiThumbUpLine, RiThumbUpFill, RiChat3Line } from "react-icons/ri";

const ReviewCard = ({ reviewList, reviewMenu, handleBorder }) => {
  const {
    src,
    rating,
    userName,
    reviewDate,
    reviewNote,
    thumbsUp,
    chat,
  } = reviewList;

  const [clicked, setClicked] = useState(false);

  const handleThumbsup = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <ReviewRating>
        <CardList>
          <Card>
            <ReviewInfo>
              <UserImg src={src} />
              <RatingInfo>
                <StarBox>{(starRating(rating), "#F0A300")}</StarBox>
                <UserName>{userName}</UserName>
                <ReviewDate>{reviewDate}</ReviewDate>
              </RatingInfo>
            </ReviewInfo>
            <ReviewNote>
              <p>{reviewNote}</p>
            </ReviewNote>
            <Icons onClick={handleThumbsup}>
              <Thumbsup>
                {!clicked ? (
                  <div>
                    <RiThumbUpLine style={{ marginRight: "4px" }} />
                    {thumbsUp}
                  </div>
                ) : (
                  <div>
                    <RiThumbUpFill style={{ marginRight: "4px" }} />
                    {Number(thumbsUp) + 1}
                  </div>
                )}
              </Thumbsup>
              <RiChat3Line style={{ marginRight: "4px" }} />
              {chat}
            </Icons>
          </Card>
        </CardList>
      </ReviewRating>
    </Container>
  );
};

export default ReviewCard;

const Container = styled.div``;

const ReviewRating = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CardList = styled.div`
  width: 75%;
  padding: 0 16px;
`;

const Card = styled.div`
  ${({ theme }) => theme.flex("center", null, "column")}
  margin-top: 15px;
  padding: 24px 20px 8px;
  background-color: white;
  box-shadow: 0 0 6px #ebebeb;
  border-radius: 10px;
`;

const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
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
  font-weight: 300;
`;

const Icons = styled.div`
  ${({ theme }) => theme.flex("flex-end", "center")};
  align-self: flex-end;
  margin: 0 16px 8px 0;
  div {
    display: flex;
  }
`;

const Thumbsup = styled.div`
  display: flex;
  margin: 4px;
  text-align: center;
`;
