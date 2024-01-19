import {
  INTRODUCE_HOME_INFO_LIST,
  INTRODUCE_HOME_INFO_TEXT,
} from "@/config/home";
import React from "react";

const IntroduceHomeListInfo = () => {
  return (
    <div className="flex-1 flex flex-col gap-3 md:gap-5 justify-center">
      <h3 className="text-[#029e50] text-[20px] md:text-[24px] font-normal">
        Về GoGroup
      </h3>
      <p className="text-[#424242]">{INTRODUCE_HOME_INFO_TEXT}</p>
      <ul>
        {INTRODUCE_HOME_INFO_LIST.map((value) => (
          <li
            key={value?.id}
            className="list-none border-b border-b-slate-300 px-3 py-4 font-medium text-[#808080]"
          >
            {value?.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IntroduceHomeListInfo;
