import React from "react";
import Image from "next/image";
import { ICON_MENU_MOBILE_LIGHT } from "@/config/img";

const NavIcon1 = () => {
  return (
    <div className="flex flex-col justify-center md:hidden">
      <div className="cursor-pointer p-2">
        <Image
          src={ICON_MENU_MOBILE_LIGHT}
          width={32}
          height={32}
          alt="icon-menu-mobile"
          className="block md:hidden"
        />
      </div>
    </div>
  );
};

export default NavIcon1;
