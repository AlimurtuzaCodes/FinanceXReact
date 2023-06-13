import React from "react";
import { arrowRightBox } from "../assets";

const GetStartedBtn = () => {
  return (
    <button className="bg-secondary flex flex-row items-center px-[45px] py-[15px]">
      <span className="text-primary font-satoshi font-bold text-[18px] mr-[15px]">
        Get Started
      </span>
      <img src={arrowRightBox} alt="arrowRight" className="object-contain" />
    </button>
  );
};

export default GetStartedBtn;
