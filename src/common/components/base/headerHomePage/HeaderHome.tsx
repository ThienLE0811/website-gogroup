"use client";
import React from "react";
import Block from "../Block";
import Logo from "../header/Logo";
import NavBar from "../header/NavBar";
import NavIcon from "../NavIcon";

const HeaderHome = () => {
  return (
    <Block blockStyles={"z-20 md:absolute w-full top-0  "}>
      <header className="h-32 flex justify-between relative pl-5 pr-3 xl:px-0 ">
        <Logo />
        <NavBar />
        <NavIcon />
      </header>
    </Block>
  );
};

export default HeaderHome;
