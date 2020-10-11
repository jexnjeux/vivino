import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import VintageDropdown from "./VintageDropdown";
import VintageRow from "./VintageRow";
import { CgClose } from "react-icons/cg";
import { starRating } from "../../../Components/tool/tool";
import { RiThumbUpLine, RiThumbUpFill, RiChat3Line } from "react-icons/ri";

const VintageModal = ({
  visible,
  onClose,
  stars,
  detail,
  iconName,
  iconList,
  handleIcon,
  filters,
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible} onClick={onMaskClick}>
        <ModalInner>
          <Header>
            <Title>Compare Vintages</Title>
            <CgClose onClick={close} style={iconStyle} />
          </Header>
          <VintageDropdown filters={filters} />
          <VintageRow
            detail={detail}
            iconName={iconName}
            iconList={iconList}
            handleIcon={handleIcon}
          />
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

VintageModal.propTypes = {
  visible: PropTypes.bool,
};

const ModalOverlay = styled.div`
  pointer-events: ${({ visible }) => (visible ? "initial" : "none")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: all 0.25s ease-in;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  pointer-events: ${({ visible }) => (visible ? "initial" : "none")};
  transform: translateY(${({ visible }) => (visible ? "0" : "700px")});
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: all 0.25s ease-in;
  /* display: ${(props) => (props.visible ? "block" : "none")}; */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  z-index: 1000;
`;

const ModalInner = styled.div`
  ${({ theme }) => theme.flex(null, null, "column")};
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px #ebebeb;
  background-color: white;
  border-radius: 10px;
  width: 60%;
  /* max-width: 1000px; */
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px;
  height: 90vh;
`;

const Header = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  padding: 0 20px;
  font-size: 28px;
  font-weight: bold;
`;

const iconStyle = {
  position: "absolute",
  width: "24px",
  height: "24px",
  right: "0",
};

export default VintageModal;
