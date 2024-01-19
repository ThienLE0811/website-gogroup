import React from "react";
import MainFooterIntro from "./MainFooterIntro";
import MainFooterInfo from "./MainFooterInfo";
import MainFooterAdd from "./MainFooterAdd";

const MainFooter = () => {
  return (
    <div className="grid grid-cols-3 gap-10 justify-around z-20 py-10">
      <MainFooterIntro />
      <MainFooterInfo />
      <MainFooterAdd />
    </div>
  );
};

export default MainFooter;
