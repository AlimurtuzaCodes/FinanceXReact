import React from "react";

const FooterSection = () => {
  return (
    <div className="mx-5 lg:mx-10 py-[100px]">
      <div className="bg-secondary py-16 flex flex-col items-center justify-center space-y-10">
        <h1 className="font-satoshi font-bold text-7xl leading-snug text-center">
          Let's grow your business, <br />
          together.
        </h1>
        <button className="bg-primary flex flex-row items-center px-11 py-4">
          <span className="text-secondary font-satoshi font-bold text-lg">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default FooterSection;
