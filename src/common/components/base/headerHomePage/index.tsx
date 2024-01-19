"use client";
import React from "react";

import Block from "../Block";
import { usePathname } from "next/navigation";
import Logo from "../header/Logo";
import NavBar from "../header/NavBar";
import WrapHeader from "./WrapHeader";

const HeaderHomePage: React.FC = () => {
  const pathName = usePathname();

  return <WrapHeader />;
};

export default HeaderHomePage;
