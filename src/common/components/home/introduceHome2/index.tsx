import React from "react";
import Block from "../../base/Block";
import IntroduceHomeList from "./IntroduceHomeList";

const IntroduceHome2 = () => {
  return (
    <div className="flex flex-col py-10 gap-10">
      <p className="text-[18px] font-normal text-[#FFFFFF] text-center">
        Là nhà cung cấp hàng đầu về chuyển đổi công nghệ số. Chúng tôi luôn mang
        đến những giá trị tốt nhất cho khách hàng.
      </p>
      <IntroduceHomeList />
    </div>
  );
};

export default IntroduceHome2;
