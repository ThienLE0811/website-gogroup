import Block from "@/common/components/base/Block";

import Footer from "@/common/components/base/footer";

import HeaderHomePage from "@/common/components/base/headerHomePage";
import HomeCoreValue from "@/common/components/home/homeCoreValue";
import IntroduceHome from "@/common/components/home/introduceHome";
import IntroduceHome2 from "@/common/components/home/introduceHome2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoGroup JSC",
  description: "Trang chủ",
};

export default function Home() {
  return (
    <main className="relative z-50 h-full">
      <HeaderHomePage />
      <Block blockStyles="mt-5">
        <IntroduceHome />
      </Block>
      <Block blockStyles="bg-[#503CED] mt-5">
        <IntroduceHome2 />
      </Block>
      <Block blockStyles="mt-5">
        <HomeCoreValue />
      </Block>
    </main>
  );
}
