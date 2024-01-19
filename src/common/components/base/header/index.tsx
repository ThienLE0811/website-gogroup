"use client";
import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Block from "../Block";
import { usePathname } from "next/navigation";
import NavIcon1 from "../NavIcon1";

const Header: React.FC<{ type?: string }> = ({ type }) => {
  const pathName = usePathname();

  return (
    pathName !== "/" && (
      <Block blockStyles={"bg-[#1B2032]"}>
        <header className="h-32 flex justify-between relative">
          <Logo />
          <NavBar />
          <NavIcon1 />
        </header>
      </Block>
    )
  );
};

export default Header;
