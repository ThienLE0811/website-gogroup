import {
  HOME_CORE_VALUE_INFO_LIST,
  HOME_CORE_VALUE_INFO_TEXT,
} from "@/config/home";
import React from "react";
import DangerouslySetInnerHtml from "../../base/DangerouslySetInnerHTML";

const HomeCoreValueListInfo = () => {
  return (
    <div className="flex-1 flex flex-col gap-3 md:gap-5 justify-center">
      <h3 className="text-[#029e50] text-[20px] md:text-[24px] font-normal">
        Giá trị cốt lõi
      </h3>

      <DangerouslySetInnerHtml
        content={HOME_CORE_VALUE_INFO_TEXT}
        styles="text-[#424242]"
      />

      <ul>
        {HOME_CORE_VALUE_INFO_LIST.map((value) => (
          <li
            key={value?.id}
            className="list-none border-b border-b-slate-300 px-3 py-4 font-medium text-[#3843a8]"
          >
            {value?.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCoreValueListInfo;
