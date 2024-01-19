import React from "react";
import Image from "next/image";
import DangerouslySetInnerHtml from "../DangerouslySetInnerHTML";

const CardPost: React.FC<{ data: DataRespone }> = ({ data }) => {
  return (
    <div className="rounded-[10px] overflow-hidden flex flex-col shadow-md group h-auto max-h-[600px] pb-7">
      <div className="relative  aspect-video overflow-hidden">
        <Image
          src={data?.jetpack_featured_media_url || ""}
          alt={"img"}
          className="group-hover:scale-110 aspect-video transition ease-in-out duration-300 object-cover object-center "
          // loading="lazy"
          fill
        />
      </div>
      <div className="px-3 py-5 flex flex-col gap-5 ">
        <h4 className="min-h-[50px] leading-10 text-[20px] md:text-[24px] line-clamp-3 font-semibold text-gray1">
          {data?.title?.rendered}
        </h4>
        <DangerouslySetInnerHtml content={data?.excerpt?.rendered} />
      </div>
    </div>
  );
};

export default CardPost;
