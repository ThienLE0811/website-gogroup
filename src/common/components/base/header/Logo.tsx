import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <Link href={"/"}>
        <Image
          src={"https://gogroup.vn/wp-content/uploads/2022/06/GoGroup-2.png"}
          width={180}
          height={62}
          alt="logo web"
          className="aspect-300/105 min-h-[62px] min-w-[180px]"
        />
      </Link>
    </div>
  );
};

export default Logo;
