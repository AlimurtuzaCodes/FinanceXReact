import React from "react";

const FooterSection = () => {
  return (
    <div className="px-[80px] py-[100px]">
      <div className="bg-secondary py-[60px] flex flex-col items-center justify-center gap-[14px]">
        <h1 className="font-satoshi font-bold text-[72px] text-center">
          Let's grow your business, <br />
          together.
        </h1>
        <button className="bg-primary flex flex-row items-center px-[45px] py-[15px]">
          <span className="text-secondary font-satoshi font-bold text-[18px]">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default FooterSection;
