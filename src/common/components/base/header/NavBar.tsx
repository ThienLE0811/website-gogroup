import { HEADER_NAVBAR } from "@/config/header";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="md:flex flex-col justify-center hidden">
      <ul className="flex gap-2 md:gap-10">
        {HEADER_NAVBAR.map((value, index) => (
          <Link
            href={value?.url}
            key={value?.id}
            className="text-[#d1d3d3] p-3 hover:text-[#ffffff]"
          >
            {value?.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
