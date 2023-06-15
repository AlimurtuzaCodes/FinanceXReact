import React from "react";
import { arrowRight } from "../../assets";

const SignUpBtn = () => {
  return (
    <div className="flex flex-row items-center space-x-2 cursor-pointer">
      <button className="font-satoshi font-medium text-white text-base">
        Sign Up
      </button>
      <img
        src={arrowRight}
        alt="arrowRight"
        className="object-contain w-3 h-3"
      />
    </div>
  );
};

export default SignUpBtn;
