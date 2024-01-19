import React from "react";
import Block from "../Block";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <footer className="relative mt-5">
      <Block blockStyles="bg-footer-image bg-cover bg-center h-auto relative ">
        <MainFooter />
        <div className="w-full relative flex justify-center z-20 py-10 text-[#FFFFFF]">
          Copyright © 2019 | GoGroup
        </div>
      </Block>
      <div className="bg-[#0d1a33] opacity-80 absolute top-0  w-full h-full"></div>
    </footer>
  );
};

export default Footer;
