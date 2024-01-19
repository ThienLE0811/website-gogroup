import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LIST_INFO_SOCIAL } from "@/config/home";

const MainFooterIntro = () => {
  return (
    <div className=" z-20 flex flex-col gap-3">
      <Image
        src={"https://gogroup.vn/wp-content/uploads/2022/06/GoGroup-2.png"}
        width={180}
        height={62}
        alt="logo web"
        className="aspect-300/105 min-h-[62px] min-w-[180px]"
      />

      <p className="font-medium text-[#c4c2c2] text-[16px] md:text-[18px]">
        GoGroup cung cấp cho quý khách hàng những thông tin sản phẩm dịch vụ
        cao. Chúng tôi luôn lấy niềm tin của khách hàng và uy tín của thương
        hiệu làm triết lý kinh doanh
      </p>
      <ul className="flex gap-2">
        {LIST_INFO_SOCIAL.map((value) => (
          <Link
            href={value?.url || "/"}
            key={value?.id}
            target="_blank"
            className="hover:scale-105 transform flex justify-center flex-col"
          >
            <Image
              src={value?.src}
              alt={value?.alt}
              width={24}
              height={24}
              loading="lazy"
            ></Image>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MainFooterIntro;
