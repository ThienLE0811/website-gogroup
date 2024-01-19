import React from "react";
import Block from "../Block";
import ContentIntroduce from "./ContentIntroduce";

const Introduce = () => {
  return (
    <div className="absolute top-32 w-full z-30">
      <Block blockStyles="">
        <div className="w-1/2">
          <ContentIntroduce />
        </div>
      </Block>
    </div>
  );
};

export default Introduce;
