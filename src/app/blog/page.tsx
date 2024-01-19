import { getListPost } from "@/api/blog";
import Block from "@/common/components/base/Block";
import ListBlog from "@/common/components/blog/ListBlog";
import TitleBlog from "@/common/components/blog/TitleBlog";
import React from "react";

const BlogPage = async () => {
  const getData = async () => {
    const res = await getListPost();

    return res;
  };

  const listPost = await getData();

  return (
    <>
      <Block blockStyles="mt-5">
        <TitleBlog />
      </Block>

      <Block blockStyles="mt-5">
        <ListBlog listPost={listPost} />
      </Block>
    </>
  );
};

export default BlogPage;
