import { INFO_CONFIG } from "@/config/home";
import React from "react";

const MainFooterInfo = () => {
  return (
    <div className="flex flex-col gap-3 z-20">
      <h4 className="text-[#FFFFFF] text:[16px] md:text-[18px] font-semibold h-[62px] flex items-center">
        Thông tin liên hệ
      </h4>
      <ul className="flex flex-col gap-2">
        {INFO_CONFIG.map((value) => (
          <li
            key={value?.id}
            className="list-none text-[#c4c2c2] text-[16px] md:text-[18px] font-medium"
          >
            {value?.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainFooterInfo;
