import React, { useState, useEffect } from "react";
import Top from "./Components/Top";
import Editor from "./Components/Editor";
import Highlights from "./Components/Highlights";
import TasteCharacteristics from "./Components/TasteCharacteristics";
import Review from "./Components/Review";
import Vintage from "./Components/Vintage";
import Facts from "./Components/Facts";
import {
  RiVipCrown2Line,
  RiSeedlingLine,
  RiThumbUpLine,
  RiMusic2Line,
  RiMoneyEuroCircleLine,
} from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const [vintageSort, setVintageSort] = useState("Year");

  const [reviewList, setReviewList] = useState({});

  const REVIEW_MENU = {
    Helpful: true,
    Recent: false,
    Friends: false,
    You: false,
  };
  const [reviewMenu, setReviewMenu] = useState(REVIEW_MENU);

  const handleBorder = (menu) => {
    setReviewMenu({
      Helpful: false,
      Recent: false,
      Friends: false,
      You: false,
      [menu]: true,
    });
  };

  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [clicked, setClicked] = useState(false);

  const [thumbIndex, setThumbIndex] = useState(0);
  useEffect(() => {
    getDetailInfo();
  }, []);

  const getDetailInfo = () => {
    fetch("/Data/detailData/detailData.json")
      .then((res) => res.json())
      .then((res) => setDetail(res.product));
  };

  // const getDetailInfo = () => {
  //   fetch("http://10.58.7.104:8000/products/1")
  //     .then((res) => res.json())
  //     .then((res) => setDetail(res.product));
  // };

  useEffect(() => {
    getReviewData();
  }, []);

  const getReviewData = () => {
    fetch("/Data/detailData/reviewData.json")
      .then((res) => res.json())
      .then((res) => setReviewList(res.reviewData));
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Top
        detail={detail}
        flag={FLAG}
        iconName={ICON_NAME}
        iconList={iconList}
      />
      <Editor detail={detail} title={TITLE} />
      <Highlights detail={detail} />
      <TasteCharacteristics detail={detail} />
      <Review
        detail={detail}
        reviewList={reviewList}
        reviewMenu={reviewMenu}
        setReviewMenu={setReviewMenu}
        handleBorder={handleBorder}
        stars={STARS}
        clicked={clicked}
        setClicked={setClicked}
        thumbIndex={thumbIndex}
        setThumbIndex={setThumbIndex}
        setReviewList={setReviewList}
      />
      <Vintage
        detail={detail}
        setDetail={setDetail}
        iconList={iconList}
        iconName={ICON_NAME}
        stars={STARS}
        vintageSort={vintageSort}
        setVintageSort={setVintageSort}
      />
      <Facts detail={detail} />
    </div>
  );
};

export default Detail;

const FLAG = {
  France: "https://www.flaticon.com/svg/static/icons/svg/197/197560.svg",
  Italy: "https://www.flaticon.com/svg/static/icons/svg/197/197626.svg",
  Spain: "https://www.flaticon.com/svg/static/icons/svg/197/197593.svg",
  Chile: "https://www.flaticon.com/svg/static/icons/svg/197/197586.svg",
  Korea: "https://www.flaticon.com/svg/static/icons/svg/197/197582.svg",
};

const ICON_NAME = {
  "top rated": "#F35A5A",
  vintage: "#F35AB4",
  "Great value": "#5A88F3",
  Popular: "#3DDCA9",
  "top 1%": "#7CCA2F",
};

const iconList = {
  "top rated": <RiVipCrown2Line size="20" color="white" />,
  vintage: <RiSeedlingLine size="20" color="white" />,
  "Great value": <RiThumbUpLine size="20" color="white" />,
  Popular: <RiMusic2Line size="20" color="white" />,
  "top 1%": <RiMoneyEuroCircleLine size="20" color="white" />,
};

const TITLE = [
  "Présentation du vin",
  "A propos du vin",
  "A propos du domaine",
  "A propos du vignoble",
];

const STARS = (num) => {
  return (
    <>
      {Array(num)
        .fill(2)
        .map((el, i) => (
          <span key={i} style={{ marginRight: "2px" }}>
            <BsStarFill height="16px" color="#f1a90d" />
          </span>
        ))}
    </>
  );
};
