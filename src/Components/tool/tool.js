import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const Btn = styled.button`
  ${({ theme }) => theme.flex("center", "center")}
  border-radius: 80px;
  outline: none;
  cursor: pointer;
`;

export const starRating = (rating) => {
  return (
    <>
      {Array(parseInt(rating))
        .fill(2)
        .map((el, i) => (
          <BsStarFill key={i} size="13" color="#BB1628" />
        ))}
      {rating % 1 !== 0 && <BsStarHalf size="13" color="#BB1628" />}
      {Array(Math.floor(5 - rating))
        .fill(2)
        .map((el, i) => (
          <BsStarFill key={i} size="13" color="#E3E3E3" />
        ))}
    </>
  );
};
