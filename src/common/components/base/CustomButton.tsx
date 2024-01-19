import React from "react";

type ICustomButton = {
  styles?: string;
  text: string;
};

const CustomButton: React.FC<ICustomButton> = () => {
  return <button>{1}</button>;
};

export default CustomButton;
