import React, { useState, useEffect } from "react";
import Top from "./Top";
import Editor from "./Editor";
import Highlights from "./Highlights";
import TasteCharacteristics from "./TasteCharacteristics";
import Review from "./Review";

const Detail = () => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getDetailInfo();
  }, []);

  const getDetailInfo = () => {
    fetch("/Data/detailData/detailData.json")
      .then((res) => res.json())
      .then((res) => setDetail(res.detailInfo));
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Top detail={detail} />
      <Editor detail={detail} />
      <Highlights detail={detail} />
      <TasteCharacteristics detail={detail} />
      <Review />
    </div>
  );
};

export default Detail;
