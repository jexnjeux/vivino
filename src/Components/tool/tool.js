import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

export const Btn = styled.button`
  ${({ theme }) => theme.flex('center', 'center')}
  border-radius: 80px;
  outline: none;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: pointer;
`;

export const starRating = (rating, color = '#BB1628') => {
  return (
    <>
      {Array(parseInt(rating)).fill(<BsStarFill size='13' color={color} />)}
      {rating % 1 !== 0 && <BsStarHalf size='13' color={color} />}
      {Array(Math.floor(5 - rating)).fill(
        <BsStarFill size='13' color='#E3E3E3' />
      )}
    </>
  );
};
