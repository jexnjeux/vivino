import React, { useState } from "react";
import styled from "styled-components";
import VintageModal from "./VintageModal";
import VintageDropdown from "./VintageDropdown";
import VintageRow from "./VintageRow";
import { starRating } from "../../../Components/tool/tool";

const Vintage = ({
  detail,
  iconList,
  iconName,
  stars,
  filters,
  vintageSort,
  setVintageSort,
  setDetail,
}) => {
  const { feature, vintages } = detail;

  const handleIcon = () => {
    return Object.keys(iconList).filter((item) => feature.indexOf(item) !== -1);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {Object.keys(detail).length > 0 && (
        <Container>
          <Title>Compare Vintages</Title>
          <SubTitle>
            Which Gérard Bertrand Domaine de L'Aigle Chardonnay Limoux vintage
            is the best to drink now?
          </SubTitle>
          <DropDown>
            <VintageDropdown
              filters={filters}
              vintageSort={vintageSort}
              setVintageSort={setVintageSort}
              detail={detail}
              setDetail={setDetail}
            />
          </DropDown>
          <VintageRow
            detail={detail}
            iconName={iconName}
            iconList={iconList}
            handleIcon={handleIcon}
            vintageSort={vintageSort}
          />

          <ShowButton onClick={openModal}>Show All</ShowButton>
          {
            <VintageModal
              detail={detail}
              iconName={iconName}
              iconList={iconList}
              handleIcon={handleIcon}
              visible={modalVisible}
              onClose={closeModal}
              stars={stars}
              filters={filters}
            />
          }
        </Container>
      )}
    </>
  );
};

export default Vintage;

const Container = styled.div`
  margin: 0 auto;
  width: 1216px;
`;
const Title = styled.div`
  margin: 20px 0;
  font-size: 28px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  margin: 16px 0;
  font-size: 20px;
  font-weight: 300;
`;

const DropDown = styled.div`
  position: relative;
`;

// const FilterBox = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   font-size: 14px;
//   padding: 0 8px;
//   border: 1px solid #eae0da;
//   border-radius: 4px;
//   background-color: #fff;
//   color: #484848;
// `;

const Filter = styled.span`
  max-width: 235px;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #dedede;
  justify-content: space-around;
`;

const Year = styled.div`
  font-size: 20px;
`;

const Rating = styled.div`
  display: flex;
`;

const StarBox = styled.div``;

const Average = styled.div`
  font-size: 16px;
  margin-right: 5px;
`;
const Purchase = styled.div`
  font-size: 14px;
`;
const Price = styled.div`
  font-size: 16px;
`;

const Feature = styled.span`
  ${({ theme }) => theme.flex(null, "center")}
  /* margin: 20px 16px; */
  padding-right: 16px;
  height: 30px;
  border-radius: 44px;
  background-color: white;
  p {
    margin-left: 10px;
    line-height: 38px;
    font-size: 13px;
  }
`;

const Icon = styled.span`
  ${({ theme }) => theme.flex("center", "center")}
  width: 24px;
  height: 24px;
  margin-left: 5px;
  border-radius: 16px;
  background-color: ${({ bgColor, iconName }) => iconName[bgColor]};
`;

const ShowButton = styled.button`
  display: inline-block;
  margin: 24px 0;
  color: #ba1628;
  font-size: 16px;
`;

const options = [
  { value: "year", label: "Year" },
  { value: "mostPopular", label: "Most popular" },
  { value: "highestUserRating", label: "Highest user rating" },
  { value: "lowestPriceFirst", label: "Lowest price first" },
  { value: "highestPriceFirst", label: "Highest price first" },
];
