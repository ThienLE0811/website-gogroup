import React from "react";
import CardIntroduce from "../../base/card/CardIntroduce";
import { INTRODUCE_HOME_INFO_LIST_2 } from "@/config/home";

const IntroduceHomeList = () => {
  return (
    <div className="py-5 gap-10 grid grid-rows-subgrid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {INTRODUCE_HOME_INFO_LIST_2.map((value) => (
        <div key={value?.id}>
          <CardIntroduce dataCardIntroduce={value} />
        </div>
      ))}
    </div>
  );
};

export default IntroduceHomeList;
