import React from "react";
import Banner from "../banner";
import HeaderHome from "./HeaderHome";

import Introduce from "./Introduce";

const WrapHeader = () => {
  return (
    <section>
      <HeaderHome />
      <Introduce />
      <Banner />
    </section>
  );
};

export default WrapHeader;
