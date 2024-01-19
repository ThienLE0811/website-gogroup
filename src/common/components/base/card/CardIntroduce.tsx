import { FACEBOOK_ICON_IMG } from "@/config/img";
import React from "react";
import Image from "next/image";

type CardIntroduceProps = {
  title: string;
  content: string;
};

const CardIntroduce: React.FC<{ dataCardIntroduce: CardIntroduceProps }> = ({
  dataCardIntroduce,
}) => {
  return (
    <div className="p-10 border border-[#979797] flex flex-col item-center gap-3 rounded-[10px]">
      <Image
        src={FACEBOOK_ICON_IMG}
        alt={"123"}
        width={24}
        height={24}
        loading="lazy"
      ></Image>
      <h4 className="text-[18px] font-semibold text-[#FFFFFF]">
        {dataCardIntroduce?.title}
      </h4>
      <p className="text-[#d6d6d6] font-medium">{dataCardIntroduce?.content}</p>
    </div>
  );
};

export default CardIntroduce;
