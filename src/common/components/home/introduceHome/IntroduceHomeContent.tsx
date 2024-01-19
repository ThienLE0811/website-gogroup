import React from "react";
import Image from "next/image";
import { INTRODUCE_HOME_IMG } from "@/config/img";
import IntroduceHomeListInfo from "./IntroduceHomeListInfo";

const IntroduceHomeContent = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      <div className={" z-10 h-full w-full flex-1"}>
        {/* <Image
          src={INTRODUCE_HOME_IMG || ""}
          style={{
            objectFit: "cover",
          }}
          quality={80}
          width={250}
          height={200}
          alt="bg"
          className="group-hover:scale-110 transition ease-in-out duration-300 aspect-video"
          loading="lazy"
          //   fill
        /> */}
        <img
          src={INTRODUCE_HOME_IMG || ""}
          alt="imagePost"
          className="group-hover:scale-110 rounded-[10px] aspect-square transition ease-in-out duration-300 object-cover max-h-[539px]"
          // loading="lazy"
        />
      </div>
      <IntroduceHomeListInfo />
    </div>
  );
};

export default IntroduceHomeContent;
