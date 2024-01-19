import { URL_VIDEO_BANNER } from "@/config/url";
import React from "react";

const VideoBanner = () => {
  return (
    <video
      playsInline
      width={"100%"}
      height={"100%"}
      autoPlay
      muted
      loop
      className="object-cover h-auto border-none outline-none max-h-[657px] min-h-[630px] z-0"
      preload="none"
    >
      {/* <source src="polina.webm" type="video/webm"></source> */}
      <source src={URL_VIDEO_BANNER} type="video/mp4"></source>
    </video>
  );
};

export default VideoBanner;
