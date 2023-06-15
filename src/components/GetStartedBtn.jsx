import React from "react";
import { arrowRightBox } from "../assets";

const GetStartedBtn = () => {
  return (
    <button className="bg-secondary flex flex-row items-center px-8 py-4 lg:px-11 space-x-2">
      <span className="text-primary font-satoshi font-bold text-base lg:text-lg">
        Get Started
      </span>
      <img src={arrowRightBox} alt="arrowRight" className="object-contain" />
    </button>
  );
};

export default GetStartedBtn;
