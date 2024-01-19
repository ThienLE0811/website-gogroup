import React from "react";
import CardPost from "../base/card/CardPost";
import Link from "next/link";

const ListBlog: React.FC<{ listPost: DataRespone[] }> = ({ listPost }) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {listPost.map((value) => (
        <>
          <Link key={value?.id} href={value?.slug} className="relative z-0">
            <CardPost data={value} />
            <p className="absolute right-0 bottom-0 pb-4 pr-4 z-10 hover:scale-105 hover:font-bold">
              Đọc thêm
            </p>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ListBlog;
