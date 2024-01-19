import { CONTENT_INTRODUCE } from "@/config/header";
import Link from "next/link";
import React from "react";

const ContentIntroduce = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[32px] md:text-[44px] font-normal text-[#00fcde]">
        Chuyển Đổi Số cùng GoGroup
      </h2>
      <p className="text-[16px] md:text-[18px] font-normal text-[#FFFFFF]">
        {CONTENT_INTRODUCE}
      </p>
      <div className="py-4">
        <Link
          href={"/contact"}
          className="bg-[#503ced] py-4 px-10 text-[#FFFFFF] rounded-[10px]"
        >
          Liên hệ chúng tôi
        </Link>
      </div>
      <div className="flex gap-1">
        <span className="text-[15px] text-[#FFFFFF] font-normal">
          Bạn cần hỗ trợ?
        </span>
        <Link
          href={"/contact"}
          className="text-[15px] text-[#f8b526] font-normal"
        >
          Liên hệ chúng tôi
        </Link>
      </div>
    </div>
  );
};

export default ContentIntroduce;
